import { sections } from "@/data";

export const fetchHomeData = async () => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1200));
		return sections;
	} catch (error) {
		throw new Error("Something went wrong");
	}
};
