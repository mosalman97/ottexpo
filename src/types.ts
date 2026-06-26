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

// export interface Channel {
// 	id: string;
// 	title: string;
// 	subtitle: string;
// 	image: string;
// }

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
	onPress?: () => void;
}

export interface ChannelSection {
	title: string;
	data: ChannelItemProps[];
}
