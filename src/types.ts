import {
	ImageSourcePropType,
	StyleProp,
	ViewStyle,
	DimensionValue,
} from "react-native";
export interface BannerItem {
	id: string;
	image: string;
}

export interface ContentItem {
	id: string;
	title: string;
	thumbnail: string;
}

export interface HomeScreenData {
	banners: BannerItem[];
}

export interface CastMember {
	id: string;
	name: string;
	character: string;
	image: string;
}

export interface CrewMember {
	id: string;
	name: string;
	role: string;
	image: string;
}
export interface ChannelItemProps {
	id: string;
	title: string;
	subtitle: string;
	image: string;
	year?: number;
	duration?: string;
	rating?: number;
	genre?: string[];
	quality?: "HD" | "Full HD" | "4K";
	language?: string;
	ageRating?: string;
	isPremium?: boolean;
	description?: string;
	director?: string;
	studio?: string;
	cast?: CastMember[];
	crew?: CrewMember[];
	onPress?: () => void;
}

export interface ChannelSection {
	title: string;
	data: ChannelItemProps[];
}

export interface SettingItemProps {
	className?: string;
	onPress?: () => void;
	title?: string;
	icon?: ImageSourcePropType;
	showSwitch?: boolean;
	switchEnabled?: boolean;
	onSwitchChange?: (value: boolean) => void;
	hideArrow?: boolean;
	reverse?: boolean;
	children?: React.ReactNode;
	bgColor?: string;
}


export interface BannerSliderProps {
	photos: BannerItem[];
	height?: DimensionValue;
	width?: number;
	sliderInterval?: number;
	autoPlay?: boolean;
	style?: StyleProp<ViewStyle>;
}