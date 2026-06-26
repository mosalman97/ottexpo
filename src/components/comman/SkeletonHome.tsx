import React from "react";
import { Dimensions, View } from "react-native";

const { width } = Dimensions.get("window");

const SPACING = 5;
const GAP = 12;
const CARD_WIDTH = (width - SPACING * 2 - GAP * 2) / 3;

export const SkeletonHome = () => {
	return (
		<View
			className="mr-3"
			style={{
				width: CARD_WIDTH,
			}}
		>
			<View className="h-32 rounded-xl bg-neutral-800" />

			<View className="w-5/6 h-4 mt-2 rounded-full bg-neutral-800" />

			<View className="w-2/3 h-3 mt-2 rounded-full bg-neutral-800" />
		</View>
	);
};
