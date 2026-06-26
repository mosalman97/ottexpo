// BannerSliderSkeleton.tsx

import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const deviceWidth = Dimensions.get("window").width;

type Props = {
	width?: number;
	height?: number | string;
};

export default function BannerSliderSkeleton({ width = deviceWidth }: Props) {
	return (
		<View
			style={[
				styles.container,
				{
					width,
					height: 200,
				},
			]}
		>
			{/* Banner */}
			<View style={styles.banner} />

			{/* Indicators */}
			<View style={styles.indicatorContainer}>
				{[1, 2, 3, 4].map((item) => (
					<View key={item} style={styles.dot} />
				))}
			</View>

			{/* Left Arrow */}
			<View style={[styles.arrow, styles.left]} />

			{/* Right Arrow */}
			<View style={[styles.arrow, styles.right]} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		overflow: "hidden",
		backgroundColor: "#1F1F1F",
	},

	banner: {
		flex: 1,
		backgroundColor: "#303030",
	},

	indicatorContainer: {
		position: "absolute",
		bottom: 10,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
	},

	dot: {
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: "#505050",
		marginHorizontal: 4,
	},

	arrow: {
		position: "absolute",
		top: "50%",
		marginTop: -20,
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#404040",
	},

	left: {
		left: 12,
	},

	right: {
		right: 12,
	},
});
