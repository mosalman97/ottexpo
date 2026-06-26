import { RootNavigator } from "@/navigation";
import { AppProviders } from "@/providers/AppProviders";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import "react-native-reanimated";

import "./global.css";

export default function App() {
	return (
		<AppProviders>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</AppProviders>
	);
}
