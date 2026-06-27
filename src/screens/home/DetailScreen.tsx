import { Container } from "@/components";
import { MORE_ITEMS } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { HomeStackParamList } from "@/navigation/types";
import { colors } from "@/theme";
import { ChannelItemProps } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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

type DetailRouteProp = RouteProp<HomeStackParamList, "DetailScreen">;

type DetailNavigationProp = NativeStackNavigationProp<
	HomeStackParamList,
	"DetailScreen"
>;

const HEADER_HEIGHT = 300;

export default function DetailScreen() {
	const { isDark } = useTheme();
	const route = useRoute<DetailRouteProp>();
	const navigation = useNavigation<DetailNavigationProp>();

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
				<Text
					numberOfLines={1}
					ellipsizeMode="tail"
					className="text-[18px] font-semibold text-white"
				>
					{movie.title}
				</Text>
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
						fadeDuration={0}
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
							<TouchableOpacity
								accessibilityRole="button"
								accessibilityLabel="Favorite"
							>
								<Ionicons
									name="heart-sharp"
									size={24}
									color="red"
								/>
							</TouchableOpacity>

							<TouchableOpacity accessibilityLabel="More options">
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
					{movie.title && (
						<Text className="text-3xl font-bold text-white">
							{movie.title}
						</Text>
					)}
					{(movie.year || movie.duration || movie.rating) && (
						<Text className="mt-2 text-[15px] text-gray-400">
							{[
								movie.year,
								movie.duration,
								movie.rating && `⭐ ${movie.rating}`,
							]
								.filter(Boolean)
								.join(" • ")}
						</Text>
					)}
					{(movie.genre?.length ||
						movie.quality ||
						movie.language ||
						movie.ageRating ||
						movie.isPremium) && (
						<View className="flex-row flex-wrap gap-2 mt-4">
							{movie.genre?.map((g) => (
								<Chip key={g}>{g}</Chip>
							))}

							{movie.quality && <Chip>{movie.quality}</Chip>}
							{movie.language && <Chip>{movie.language}</Chip>}
							{movie.ageRating && <Chip>{movie.ageRating}</Chip>}

							{movie.isPremium && (
								<Chip icon="crown">Premium</Chip>
							)}
						</View>
					)}
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
					<Text className="mt-8 mb-[14px] text-[22px] font-bold text-white">
						About
					</Text>
					{movie.description && (
						<Text className="text-[16px] leading-7 text-grey">
							{movie.description}
						</Text>
					)}
					<Text className="mt-8 mb-4 text-[22px] font-bold text-white">
						Cast
					</Text>
					{movie?.cast?.map((actor) => (
						<View
							key={actor.id}
							className="flex-row items-center mb-4"
						>
							{actor.image && (
								<Image
									source={{ uri: actor.image }}
									className="h-[42px] w-[42px] rounded-[20px]"
									resizeMode="cover"
								/>
							)}

							<View className="flex-1 ml-4">
								{actor.name && (
									<Text className="text-[17px] font-semibold text-white">
										{actor.name}
									</Text>
								)}

								{actor.character && (
									<Text className="mt-1 text-[14px] text-grey-light">
										{actor.character}
									</Text>
								)}
							</View>
						</View>
					))}
					<Text className="mt-8 mb-4  text-[22px] font-bold text-white">
						Crew
					</Text>
					{movie.crew?.map((item) => (
						<View
							key={item.id}
							className="mb-5 flex-row justify-between border-b border-[#2A2A2A] pb-3"
						>
							{item.role && (
								<Text className="text-[14px] text-grey">
									{item.role}
								</Text>
							)}

							{item.name && (
								<Text className="text-[16px] font-semibold text-white">
									{item.name}
								</Text>
							)}
						</View>
					))}
					<Text className="mt-[35px] mb-[15px] text-[22px] font-bold text-white">
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
