import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { images } from "../../theme";

export const Logo = ({ style = {} }) => {
	return (
		<View style={[styles.logoContainer, style]}>
			<Image style={styles.logo} source={images.img_logo} />
		</View>
	);
};

const styles = StyleSheet.create({
	logoContainer: {
		width: 120,
		height: 36,
	},
	logo: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
});
