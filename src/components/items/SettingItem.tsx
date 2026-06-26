import React from "react";
import { Image, Text, View } from "react-native";
import { Switch } from "react-native-switch";

import { colors, images } from "../../theme";

type SettingItemProps = {
	className?: string;
	onPress?: () => void;
	title?: string;
	subtitle?: string;
	icon?: any;
	showSwitch?: boolean;
	switchEnabled?: boolean;
	onSwitchChange?: (value: boolean) => void;
	hideArrow?: boolean;
	reverse?: boolean;
	children?: React.ReactNode;
	bgColor?: string;
};

export const SettingItem = ({
	className = "",
	title = "",
	subtitle = "",
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
						<Text className="text-base font-semibold text-white">
							{title}
						</Text>

						{!!subtitle && (
							<Text className="mt-1 text-xs text-gray-400">
								{subtitle}
							</Text>
						)}
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
