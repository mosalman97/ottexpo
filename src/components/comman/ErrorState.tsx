import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

import { useTheme } from "@/hooks/useTheme";
import { colors } from "@/theme";

interface ErrorStateProps {
	title?: string;
	message?: string;
	onRetry?: () => void;
}

export const ErrorState = ({
	title = "Something went wrong",
	message = "We couldn't load the content. Please try again.",
	onRetry,
}: ErrorStateProps) => {
	const { isDark } = useTheme();

	return (
		<View className="items-center justify-center flex-1 px-6">
			<Text
				variant="headlineSmall"
				style={{
					color: isDark ? colors.white : colors.black,
					fontWeight: "700",
				}}
			>
				{title}
			</Text>

			<Text
				variant="bodyMedium"
				className="mt-2 text-center"
				style={{
					color: isDark ? colors.white : colors.black,
				}}
			>
				{message}
			</Text>

			{onRetry && (
				<Button mode="contained" onPress={onRetry} className="mt-6">
					Try Again
				</Button>
			)}
		</View>
	);
};
