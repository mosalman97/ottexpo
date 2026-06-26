import React, { useEffect, useState } from "react";
import { FlatList, SectionList, View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
import { colors } from "@/theme";
import { BannerItem, ChannelSection as Section } from "@/types";
import { Skeleton } from "moti/skeleton";

export default function HomeScreen() {
	const { isDark } = useTheme();
	const insets = useSafeAreaInsets();
	const [loading, setLoading] = useState(true);
	const [sections, setSections] = useState<Section[]>([]);
	const [banners, setBanners] = useState<BannerItem[]>([]);
	const [error, setError] = useState("");
	const displaySections = loading ? SKELETON_SECTIONS : sections;

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		setLoading(true);
		try {
			const sections = await fetchHomeData();
			const banners = await fetchBannerData();
			setSections(sections);
			setBanners(banners);
		} catch (error: any) {
			setError(error.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	};

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
			<View
				className="items-center justify-center px-4 pb-3"
				style={{ paddingTop: insets.top + 10 }}
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
				renderSectionHeader={({ section }) => (
					<Text
						variant="titleMedium"
						className="px-4 py-4 font-bold"
						style={{
							fontSize: 20,
							color: isDark ? colors.white : colors.black,
						}}
					>
						{section.title}
					</Text>
				)}
				renderItem={() => null}
				renderSectionFooter={({ section }) => {
					if (loading) {
						return (
							<View className="mb-6">
								<FlatList
									horizontal
									data={Array.from({ length: 8 }, (_, i) => ({
										id: `skeleton-${i}`,
									}))}
									keyExtractor={(item) => item.id}
									renderItem={() => <ChannelItemSkeleton />}
									showsHorizontalScrollIndicator={false}
									contentContainerStyle={{
										paddingHorizontal: 16,
									}}
								/>
							</View>
						);
					}

					return <ChannelSection section={section} />;
				}}
				ListHeaderComponent={() => (
					<>
						{!loading ? (
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
						)}
					</>
				)}
			/>
		</Container>
	);
}
