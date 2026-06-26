import { Container, Logo, SettingItem } from "@/components";
import { MENU } from "@/constants/profileMenu";
import { useTheme } from "@/hooks/useTheme";
import { colors } from "@/theme";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
	const insets = useSafeAreaInsets();
	const { isDark, toggleTheme } = useTheme();
	return (
		<Container>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingTop: insets.top + 10,
					paddingBottom: insets.bottom,
				}}
			>
				<View className="items-center mt-8">
					<Avatar.Icon
						size={120}
						icon="emoticon-outline"
						style={{
							backgroundColor: "#EA5C6A",
						}}
						color="#FFD4DB"
					/>

					<Text className="mt-6 mb-4 text-[20px] font-bold text-white">
						Mike John
					</Text>

					<Text
						style={{
							fontSize: 9,
							color: "#B8AFC3",
							letterSpacing: 2,
						}}
					>
						SWITCH PROFILE
					</Text>
				</View>

				{/* Menu */}
				<View className="gap-5 px-5 mt-10">
					{MENU.map((item, index) => (
						<SettingItem
							key={item.id}
							title={item.title}
							icon={item.icon}
							showSwitch={item.id === 1}
							switchEnabled={isDark}
							onSwitchChange={toggleTheme}
							bgColor={!isDark ? colors.pink : colors.bg2}
						/>
					))}
				</View>

				{/* Footer */}
				<View className="items-center mt-12">
					<Logo />
					<Text
						style={{
							color: "#9F97AA",
							marginTop: 8,
						}}
					>
						Version 1.0.1 (1)
					</Text>
				</View>
			</ScrollView>
		</Container>
	);
};

export default ProfileScreen;
