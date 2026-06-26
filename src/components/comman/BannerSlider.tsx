import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
	ActivityIndicator,
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { colors, images } from "../../theme";

let interval = null as any;
const deviceWidth = Dimensions.get("window").width;

export const BannerSlider = ({
	photos = [] as any,
	height = "100%" as any,
	width = deviceWidth,
	sliderInterval = 3000,
	autoPlay = true,
	style = {} as any,
}) => {
	const [sliderIndex, setSliderIndex] = useState(0);
	const [loading, setLoading] = useState(true);

	let flatListRef = useRef<FlatList>(null);
	let sliderIndexRef = useRef(0);

	useEffect(() => {
		if (flatListRef.current && autoPlay && photos.length > 1) {
			interval = setInterval(() => {
				flatListRef?.current?.scrollToIndex({
					index:
						(sliderIndexRef?.current ||
							sliderIndexRef?.current === 0) &&
						sliderIndexRef?.current < photos.length - 1
							? sliderIndexRef?.current + 1
							: 0,
				});
			}, sliderInterval);
		}
		return () => {
			clearInterval(interval);
			interval = null;
		};
	}, []);

	const _onViewableItemsChanged = useCallback(
		({ viewableItems, changed }: any) => {
			if (viewableItems.length > 0) {
				sliderIndexRef.current = viewableItems[0].index;
				setSliderIndex(viewableItems[0].index);
			}
		},
		[],
	);
	return (
		<View style={styles.mainContainer}>
			<FlatList
				ref={flatListRef}
				style={[{ height, width }, style]}
				horizontal
				data={photos}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={item.onPress ? item.onPress : () => {}}
							style={{ width, height }}
						>
							{loading && (
								<ActivityIndicator
									size="large"
									color="#fff"
									style={StyleSheet.absoluteFillObject}
								/>
							)}
							<Image
								style={styles.imgStyle}
								source={{ uri: item.image }}
								onLoadStart={() => setLoading(true)}
								onLoadEnd={() => setLoading(false)}
							/>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item, index) => index.toString()}
				// Add the 4 properties below for snapping
				snapToAlignment={"start"}
				snapToInterval={width}
				decelerationRate={"fast"}
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				onViewableItemsChanged={_onViewableItemsChanged}
				viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
			/>
			{
				<>
					<ArrowButton
						hidden={sliderIndex === 0 || photos.length <= 1}
						style={{ ...styles.leftArrow, height }}
						icon={images.icon_arrow_left}
						onPress={() =>
							sliderIndex > 0
								? flatListRef?.current?.scrollToIndex({
										index: sliderIndex - 1,
									})
								: null
						}
					/>
					<ArrowButton
						hidden={
							sliderIndex === photos.length - 1 ||
							photos.length <= 1
						}
						style={{ ...styles.rightArrow, height }}
						icon={images.icon_arrow_right}
						onPress={() =>
							sliderIndex < photos.length - 1
								? flatListRef?.current?.scrollToIndex({
										index: sliderIndex + 1,
									})
								: null
						}
					/>
				</>
			}
			{images && photos.length > 0 ? (
				<View style={styles.indicatorContainer}>
					{photos.map((item: any, index: any) => {
						return (
							<IndicatorItem
								key={`key-${index}`}
								active={index === sliderIndex}
								onPress={() =>
									flatListRef?.current?.scrollToIndex({
										index,
									})
								}
							/>
						);
					})}
				</View>
			) : null}
		</View>
	);
};

const ArrowButton = ({
	onPress = null as any,
	hidden = true,
	icon = null as any,
	style = {},
}) => {
	const gradRight = ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"] as const;

	const gradLeft = ["rgba(0,0,0,0.8)", "rgba(0,0,0,0)"] as const;
	return hidden ? null : (
		<TouchableOpacity
			disabled={hidden}
			onPress={onPress}
			style={{
				...styles.arrowStyle,
				...style, //opacity: hidden ? 0.3 : 1
			}}
		>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				colors={icon === images.icon_arrow_left ? gradLeft : gradRight}
				style={styles.gradient}
			/>
			<Image source={icon} style={styles.arrowIconStyle} />
		</TouchableOpacity>
	);
};

const IndicatorItem = ({ onPress = null as any, active = false }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.indicatorStyle}>
			<View
				style={{
					width: 6,
					height: 6,
					borderRadius: 3,
					backgroundColor: active
						? colors.pink
						: "rgba(255,255,255,0.4)",
				}}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		borderRadius: 15,
		backgroundColor: colors.bg2,
		overflow: "hidden",
	},
	imgStyle: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		overflow: "hidden",
	},
	indicatorContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		alignSelf: "center",
		bottom: 0,
		height: 30,
		paddingHorizontal: 3,
		borderRadius: 15,
	},
	indicatorStyle: {
		width: 15,
		height: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	indicatorIconStyle: {
		width: 10,
		height: 10,
	},
	arrowStyle: {
		height: "100%",
		width: 40,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	arrowIconStyle: {
		width: 20,
		height: 20,
		resizeMode: "contain",
		tintColor: colors.white,
	},
	leftArrow: {
		position: "absolute",
		left: 0,
	},
	rightArrow: {
		position: "absolute",
		right: 0,
	},
	gradient: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	},
});
