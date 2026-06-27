import { deviceWidth } from "@/constants/dimensions";
import { ChannelItemProps } from "@/types";
import React from "react";
import { Image, Text } from "react-native";
import { Card } from "react-native-paper";

const SPACING = 5;
const GAP = 12;
const COLUMNS = 3;

const ChannelItemComponent: React.FC<ChannelItemProps> = ({
	image,
	title,
	subtitle,
	onPress,
}) => {
	const cardWidth =
		(deviceWidth - SPACING * 2 - GAP * (COLUMNS - 1)) / COLUMNS;

	return (
		<Card
			mode="contained"
			onPress={onPress}
			className="mr-3"
			style={{
				width: cardWidth,
				backgroundColor: "transparent",
			}}
		>
			<Image
				source={{ uri: image }}
				resizeMode="cover"
				className="w-full h-32 rounded-xl"
			/>

			<Text
				numberOfLines={1}
				className="mt-2 text-[15px] font-semibold text-white"
			>
				{title}
			</Text>

			<Text
				numberOfLines={1}
				className="mt-0.5 text-[12px] font-normal text-grey-light"
			>
				{subtitle}
			</Text>
		</Card>
	);
};

export const ChannelItem = React.memo(ChannelItemComponent);
