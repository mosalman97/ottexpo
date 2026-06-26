import { sections,banners } from "@/data";

export const fetchHomeData = async () => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1200));
		return sections;
	} catch (error) {
		throw new Error("Something went wrong");
	}
};

export const fetchBannerData = async () => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1200));
		return banners;
	} catch (error) {
		throw new Error("Failed to fetch banners");
	}
};