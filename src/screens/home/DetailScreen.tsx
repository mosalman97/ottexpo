import { Container } from "@/components";
import { colors } from "@/theme";
import { ChannelItemProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
import {
	Animated,
	Image,
	ScrollView,
	StatusBar,
	TouchableOpacity,
	View,
} from "react-native";
import { Button, Chip, Text } from "react-native-paper";

const HEADER_HEIGHT = 300;

export default function DetailScreen() {
	const route = useRoute();
	const navigation = useNavigation();

	const { movie } = route.params as {
		movie: ChannelItemProps;
	};

	const scrollY = useRef(new Animated.Value(0)).current;

	const opacity = scrollY.interpolate({
		inputRange: [150, 250],
		outputRange: [0, 1],
		extrapolate: "clamp",
	});

	return (
		<Container>
			<StatusBar barStyle="light-content" />
			<Animated.View
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: 90,
					backgroundColor: "#111",
					opacity,
					zIndex: 99,
					justifyContent: "flex-end",
					paddingHorizontal: 20,
					paddingBottom: 15,
				}}
			>
				<Text variant="titleMedium" style={{ color: colors.ltpink }}>
					{movie.title}
				</Text>
			</Animated.View>
			<Animated.ScrollView
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: false },
				)}
			>
				<View style={{ height: HEADER_HEIGHT }}>
					<Image
						source={{ uri: movie.image }}
						style={{
							width: "100%",
							height: HEADER_HEIGHT,
						}}
					/>

					<LinearGradient
						colors={["transparent", "#111"]}
						style={{
							position: "absolute",
							bottom: 0,
							left: 0,
							right: 0,
							height: 180,
						}}
					/>

					<View
						style={{
							position: "absolute",
							top: 50,
							left: 20,
							right: 20,
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<TouchableOpacity
							onPress={() => {
								navigation.goBack();
							}}
						>
							<Ionicons
								name="arrow-back"
								size={26}
								color="white"
							/>
						</TouchableOpacity>

						<View style={{ flexDirection: "row", gap: 20 }}>
							<TouchableOpacity>
								<Ionicons
									name="heart-sharp"
									size={24}
									color="red"
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Ionicons
									name="ellipsis-vertical"
									size={24}
									color="white"
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={{ padding: 20 }}>
					<Text
						variant="headlineMedium"
						style={{ color: "white", fontWeight: "700" }}
					>
						{movie.title}
					</Text>

					<Text style={{ color: "#999", marginTop: 6 }}>
						{movie.year} • {movie.duration} • ⭐ {movie.rating}
					</Text>

					<View
						style={{
							flexDirection: "row",
							flexWrap: "wrap",
							marginTop: 16,
							gap: 8,
						}}
					>
						{movie?.genre?.map((g) => (
							<Chip key={g}>{g}</Chip>
						))}

						<Chip>{movie.quality}</Chip>
						<Chip>{movie.language}</Chip>
						<Chip>{movie.ageRating}</Chip>

						{movie.isPremium && <Chip icon="crown">Premium</Chip>}
					</View>

					<Button
						mode="contained"
						icon="play"
						style={{ marginTop: 24 }}
					>
						Play Now
					</Button>

					<Button
						mode="outlined"
						icon="download"
						style={{ marginTop: 12 }}
					>
						Download
					</Button>

					<Text
						variant="titleMedium"
						style={{
							color: "white",
							marginTop: 30,
							marginBottom: 10,
						}}
					>
						About
					</Text>

					<Text
						style={{
							color: "#bbb",
							lineHeight: 24,
						}}
					>
						{movie.description}
					</Text>
					<Text
						variant="titleMedium"
						style={{
							color: "white",
							marginTop: 35,
							marginBottom: 15,
						}}
					>
						More Like This
					</Text>

					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						{[1, 2, 3, 4, 5].map((item) => (
							<Image
								key={item}
								source={{ uri: movie.image }}
								style={{
									width: 130,
									height: 190,
									borderRadius: 10,
									marginRight: 14,
								}}
							/>
						))}
					</ScrollView>

					<View style={{ height: 60 }} />
				</View>
			</Animated.ScrollView>
		</Container>
	);
}
