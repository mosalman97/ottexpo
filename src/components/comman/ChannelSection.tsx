import { ChannelItem } from "@/components";
import { ChannelSection as Section } from "@/types";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";

interface Props {
	section: Section;
}

export const ChannelSection = ({ section }: Props) => {
	const navigation = useNavigation<any>();
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
							navigation.navigate("DetailScreen", {
								movie: item,
							});
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
