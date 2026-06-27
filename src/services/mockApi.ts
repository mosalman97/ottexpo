import { BANNERS, SECTIONS } from "@/data";

export const fetchHomeData = async () => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1200));
		return SECTIONS;
	} catch (error) {
		throw new Error("Something went wrong");
	}
};

export const fetchBannerData = async () => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1200));
		return BANNERS;
	} catch (error) {
		throw new Error("Failed to fetch banners");
	}
};
