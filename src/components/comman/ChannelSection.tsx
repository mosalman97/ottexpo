import { ChannelItem } from "../items/ChannelItem";
import { ChannelItemSkeleton } from "./ChannelItemSkeleton";

import { ChannelSection as Section } from "@/types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";

interface Props {
	section: Section;
	loading?: boolean;
}

const skeletonData = Array.from({ length: 8 }, (_, index) => ({
	id: `skeleton-${index}`,
}));

export const ChannelSection = ({ section, loading }: Props) => {
	const navigation = useNavigation<any>();
	if (loading) {
		return (
			<View className="mb-6">
				<FlatList
					horizontal
					data={skeletonData}
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

	return (
		<View className="mb-6">
			<FlatList
				horizontal
				data={section.data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ChannelItem
						{...item}
						onPress={() =>
							navigation.navigate("DetailScreen", {
								movie: item,
							})
						}
					/>
				)}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 16,
				}}
			/>
		</View>
	);
};
