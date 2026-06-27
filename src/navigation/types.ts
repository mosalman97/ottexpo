import { ChannelItemProps } from "@/types";

export type RootStackParamList = {
	MainTabs: undefined;
};

export type BottomTabParamList = {
	Home: undefined;
	Profile: undefined;
};

export type HomeStackParamList = {
	HomeStack: undefined;
	DetailScreen: {
		movie: ChannelItemProps;
	};
};
