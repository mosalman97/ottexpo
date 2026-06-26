export interface BannerItem {
	id: string;
	image: string;
	title: string;
}

export interface ContentItem {
	id: string;
	title: string;
	thumbnail: string;
}

export interface HomeScreenData {
	banners: BannerItem[];
	featuredChannels: ChannelItem[];
	recentlyAdded: ContentItem[];
}

export interface Channel {
	id: string;
	title: string;
	subtitle: string;
	image: string;
}

export interface ChannelSection {
	title: string;
	data: Channel[];
}

export interface ChannelItemProps {
	id: string;
	title: string;
	subtitle: string;
	image: string;
	onPress: () => void;
}
