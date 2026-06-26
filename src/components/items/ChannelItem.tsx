import React from "react";
import { Dimensions, Image } from "react-native";
import { Card, Text } from "react-native-paper";

import { useTheme } from "@/hooks/useTheme";
import { ChannelItemProps } from "@/types";

const { width } = Dimensions.get("window");

const SPACING = 5;
const GAP = 12;
const CARD_WIDTH = (width - SPACING * 2 - GAP * 2) / 3;

export const ChannelItem: React.FC<ChannelItemProps> = ({
	image,
	title,
	subtitle,
	onPress,
}) => {
	const { colors } = useTheme();

	return (
		<Card
			mode="contained"
			onPress={onPress}
			className="mr-3"
			style={{
				width: CARD_WIDTH,
				backgroundColor: "transparent",
			}}
		>
			<Image
				source={{ uri: image }}
				resizeMode="cover"
				className="w-full h-32 rounded-xl"
			/>

			<Text
				variant="titleSmall"
				numberOfLines={1}
				className="mt-2"
				style={{ color: colors.text }}
			>
				{title}
			</Text>

			<Text
				variant="bodySmall"
				numberOfLines={1}
				style={{ color: colors.text + "99" }}
			>
				{subtitle}
			</Text>
		</Card>
	);
};
