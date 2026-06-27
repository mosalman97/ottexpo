import { SettingItemProps } from "@/types";
import React from "react";
import { Image, Text, View } from "react-native";
import { Switch } from "react-native-switch";
import { colors, images } from "../../theme";

const SettingItemComponent = ({
	className = "",
	title = "",
	icon,
	showSwitch = false,
	switchEnabled = false,
	onSwitchChange,
	hideArrow = false,
	reverse = false,
	children,
	bgColor = "",
}: SettingItemProps) => {
	return (
		<View className={`mb-3 overflow-hidden rounded-2xl ${className}`}>
			<View
				className={`flex-row items-center justify-between px-4 py-4 rounded-2xl`}
				style={{ backgroundColor: bgColor }}
			>
				<View
					className={`items-center ${
						reverse ? "flex-row-reverse flex-1" : "flex-row"
					}`}
				>
					{icon && (
						<Image
							source={icon}
							className="w-6 h-6 mr-3"
							resizeMode="contain"
						/>
					)}

					<View className={reverse ? "flex-1 items-end" : ""}>
						<Text className="text-[16px] font-semibold text-white">
							{title}
						</Text>
					</View>
				</View>

				{showSwitch ? (
					<Switch
						value={switchEnabled}
						onValueChange={onSwitchChange}
						renderActiveText={false}
						renderInActiveText={false}
						backgroundActive={colors.pink}
						backgroundInactive="#444F61"
					/>
				) : !hideArrow ? (
					<Image
						source={images.icon_arrow_right}
						className="w-6 h-6 opacity-30"
						resizeMode="contain"
					/>
				) : null}

				{children}
			</View>
		</View>
	);
};

export const SettingItem = React.memo(SettingItemComponent);
