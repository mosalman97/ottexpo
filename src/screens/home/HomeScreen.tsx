import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { BannerSlider, ChannelSection, Container } from "@/components";
import { banners } from "@/data";
import { fetchHomeData } from "@/services/mockApi";
import { ChannelSection as Section } from "@/types";

interface RouterProps {
	navigation: NavigationProp<any, any>;
}

export default function HomeScreen({ navigation }: RouterProps) {
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
			<SectionList
				sections={sections}
				keyExtractor={(item) => item.id}
				stickySectionHeadersEnabled={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingTop: insets.top + 20,
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
					<BannerSlider
						height={200}
						sliderInterval={5000}
						style={{ overflow: "hidden" }}
						photos={banners}
					/>
				)}
			/>
		</Container>
	);
}
