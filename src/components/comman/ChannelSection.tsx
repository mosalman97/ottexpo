import React from "react";
import { FlatList, View } from "react-native";

import { ChannelItem } from "@/components";
import { ChannelSection as Section } from "@/types";

interface Props {
	section: Section;
}

export const ChannelSection = ({ section }: Props) => {
	return (
		<View className="mb-6">
			<FlatList
				horizontal
				data={section.data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ChannelItem
						{...item}
						onPress={() => {
							console.log("Helo ");
						}}
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
