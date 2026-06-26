import { Container } from "@/components";
import { MORE_ITEMS } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { colors } from "@/theme";
import { ChannelItemProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useRef } from "react";
import {
	Animated,
	Image,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Button, Chip } from "react-native-paper";

const HEADER_HEIGHT = 300;

export default function DetailScreen() {
	const { isDark } = useTheme();
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

	const handleBack = useCallback(() => {
		navigation.goBack();
	}, [navigation]);

	return (
		<Container>
			<StatusBar barStyle="light-content" />
			<Animated.View
				className="absolute left-0 right-0 top-0 z-50 h-[90px] justify-end bg-[#111] px-5 pb-[15px]"
				style={{ opacity }}
				pointerEvents="none"
			>
				<Text style={{ color: colors.ltpink }}>{movie.title}</Text>
			</Animated.View>

			<Animated.ScrollView
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: true },
				)}
			>
				<View className="relative" style={{ height: HEADER_HEIGHT }}>
					<Image
						source={{ uri: movie.image }}
						className="w-full h-full"
						resizeMode="cover"
					/>

					<LinearGradient
						colors={["transparent", "#111"]}
						className="absolute bottom-0 left-0 right-0 h-[180px]"
					/>

					<View className="absolute left-5 right-5 top-[30px] flex-row items-center justify-between">
						<TouchableOpacity
							onPress={handleBack}
							accessibilityRole="button"
							accessibilityLabel="Go back"
						>
							<Ionicons
								name="arrow-back"
								size={26}
								color="white"
							/>
						</TouchableOpacity>

						<View className="flex-row gap-5">
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

				<View className="p-5">
					<Text className={`font-bold text-white`}>
						{movie.title}
					</Text>

					<Text className="mt-1.5 text-[#999]">
						{movie.year} • {movie.duration} • ⭐ {movie.rating}
					</Text>

					<View className="flex-row flex-wrap gap-2 mt-4">
						{movie.genre?.map((g) => (
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
						className="mt-6"
						textColor={isDark ? colors.white : colors.black}
					>
						Play Now
					</Button>

					<Button
						mode="outlined"
						icon="download"
						className="mt-3"
						textColor={isDark ? colors.white : colors.black}
					>
						Download
					</Button>

					<Text className="mb-2.5 mt-[30px] text-white">About</Text>

					<Text className="leading-6 text-[#bbb]">
						{movie.description}
					</Text>

					<Text className="mb-[15px] mt-[35px] text-white">
						More Like This
					</Text>

					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						{MORE_ITEMS.map((item) => (
							<Image
								key={item}
								source={{ uri: movie.image }}
								className="mr-[14px] h-[190px] w-[130px] rounded-xl"
								resizeMode="cover"
							/>
						))}
					</ScrollView>

					<View className="h-[60px]" />
				</View>
			</Animated.ScrollView>
		</Container>
	);
}
