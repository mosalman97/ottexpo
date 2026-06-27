import {
	BannerSlider,
	ChannelItemSkeleton,
	ChannelSection,
	Container,
	ErrorState,
	Logo,
} from "@/components";
import { SKELETON_SECTIONS } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { fetchBannerData, fetchHomeData } from "@/services/mockApi";
import { BannerItem, ChannelSection as Section } from "@/types";
import { Skeleton } from "moti/skeleton";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, SectionList, StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
	const { isDark, colors } = useTheme();
	const insets = useSafeAreaInsets();
	const [loading, setLoading] = useState(true);
	const [sections, setSections] = useState<Section[]>([]);
	const [banners, setBanners] = useState<BannerItem[]>([]);
	const [error, setError] = useState("");
	const displaySections = loading ? SKELETON_SECTIONS : sections;

	useEffect(() => {
		loadData();
	}, []);

	const loadData = useCallback(async () => {
		setLoading(true);
		try {
			const sections = await fetchHomeData();
			const banners = await fetchBannerData();
			setSections(sections);
			setBanners(banners);
		} catch (error: unknown) {
			setError(
				error instanceof Error ? error.message : "Something went wrong",
			);
		} finally {
			setLoading(false);
		}
	}, []);

	const renderSectionHeader = useCallback(
		({ section }: { section: Section }) => (
			<Text className="px-4 py-4 text-[20px] font-bold text-white">
				{section.title}
			</Text>
		),
		[colors.text],
	);

	const renderHeader = useCallback(() => {
		return !loading ? (
			<View className="px-[16px]">
				<BannerSlider
					height={200}
					sliderInterval={5000}
					style={{ overflow: "hidden" }}
					photos={banners}
				/>
			</View>
		) : (
			<View style={{ paddingHorizontal: 16 }}>
				<Skeleton
					width="100%"
					height={200}
					radius={12}
					colorMode={isDark ? "dark" : "light"}
				/>
			</View>
		);
	}, [loading, banners, isDark]);

	const renderEmptyItem = () => null;

	const renderSectionFooter = useCallback(
		({ section }: { section: Section }) => {
			if (loading) {
				return (
					<View className="mb-6">
						<FlatList
							horizontal
							data={SKELETON_SECTIONS}
							keyExtractor={(item) => item.title}
							renderItem={() => <ChannelItemSkeleton />}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ paddingHorizontal: 16 }}
							initialNumToRender={5}
							maxToRenderPerBatch={5}
							windowSize={3}
							removeClippedSubviews
						/>
					</View>
				);
			}

			return <ChannelSection section={section} />;
		},
		[loading],
	);

	if (error) {
		return (
			<Container>
				<ErrorState
					title="Failed to load Home"
					message={error}
					onRetry={loadData}
				/>
			</Container>
		);
	}

	return (
		<Container>
			<StatusBar
				backgroundColor={colors.background}
				barStyle="light-content"
			/>
			<View
				className="items-center justify-center px-4 pb-3"
				style={{ paddingTop: insets.top + 15 }}
			>
				<Logo />
			</View>
			<SectionList
				sections={displaySections}
				keyExtractor={(item) => item.id}
				stickySectionHeadersEnabled={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingTop: 12,
				}}
				renderSectionHeader={renderSectionHeader}
				renderItem={renderEmptyItem}
				renderSectionFooter={renderSectionFooter}
				ListHeaderComponent={renderHeader}
				initialNumToRender={4}
				maxToRenderPerBatch={4}
				windowSize={5}
				removeClippedSubviews
				updateCellsBatchingPeriod={50}
			/>
		</Container>
	);
}
