import React, { useEffect, useState } from "react";
import { SectionList, View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { BannerSlider, ChannelSection, Container, Logo } from "@/components";
import { banners } from "@/data";
import { fetchHomeData } from "@/services/mockApi";
import { ChannelSection as Section } from "@/types";

export default function HomeScreen() {
	const insets = useSafeAreaInsets();
	const [loading, setLoading] = useState(true);
	const [sections, setSections] = useState<Section[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		try {
			setLoading(true);
			const data = await fetchHomeData();
			setSections(data);
		} catch (e: any) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};

	// if (loading) {
	// 	return <SkeletonHome />;
	// }

	// if (error) {
	// 	return (
	// 		<View className="items-center justify-center flex-1">
	// 			<Text>{error}</Text>
	// 		</View>
	// 	);
	// }

	return (
		<Container>
			<View
				className="items-center justify-center px-4 pb-3"
				style={{ paddingTop: insets.top + 10 }}
			>
				<Logo />
			</View>
			<SectionList
				sections={sections}
				keyExtractor={(item) => item.id}
				stickySectionHeadersEnabled={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingTop: 12,
				}}
				renderSectionHeader={({ section }) => (
					<Text
						variant="headlineSmall"
						className="px-4 py-4 font-bold"
					>
						{section.title}
					</Text>
				)}
				renderItem={() => null}
				renderSectionFooter={({ section }) => (
					<ChannelSection section={section} />
				)}
				ListHeaderComponent={() => (
					<View className="px-[16px]">
						<BannerSlider
							height={200}
							sliderInterval={5000}
							style={{ overflow: "hidden" }}
							photos={banners}
						/>
					</View>
				)}
			/>
		</Container>
	);
}
