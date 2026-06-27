import { Skeleton } from "moti/skeleton";
import React from "react";
import { View } from "react-native";

import { useTheme } from "@/hooks/useTheme";

import { deviceWidth } from "@/constants/dimensions";

const SPACING = 5;
const GAP = 12;
const CARD_WIDTH = (deviceWidth - SPACING * 2 - GAP * 2) / 3;

export const ChannelItemSkeleton = () => {
	const { isDark } = useTheme();

	return (
		<View
			style={{
				width: CARD_WIDTH,
				marginRight: 12,
			}}
		>
			<Skeleton
				width={CARD_WIDTH}
				height={128}
				radius={12}
				colorMode={isDark ? "dark" : "light"}
			/>

			<View style={{ marginTop: 10 }}>
				<Skeleton
					width="90%"
					height={16}
					radius={4}
					colorMode={isDark ? "dark" : "light"}
				/>

				<View style={{ height: 8 }} />

				<Skeleton
					width="60%"
					height={14}
					radius={4}
					colorMode={isDark ? "dark" : "light"}
				/>
			</View>
		</View>
	);
};
