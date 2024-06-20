import { useGenericQuery } from "../hooks/useGenericQuery";

export const useCategoriesData = () => {
	return useGenericQuery({
		keys: ["categories"],
		apiEndpoint: "departments",
		filterName: "categories",
	});
};

export const useSingleCategoryData = (id) => {
	return useGenericQuery({
		keys: [`category_${id}`],
		apiEndpoint: `departments/${id}/lawyers`,
		filterName: "categories",
	});
};

export const useSingleLawyerData = (id) => {
	return useGenericQuery({
		keys: [`lawyer_${id}`],
		apiEndpoint: `get/lawyer/${id}`,
		filterName: "lawyer",
	});
};

export const useUserData = () => {
	return useGenericQuery({
		keys: [`user`],
		apiEndpoint: `profile/user`,
		filterName: "user",
	});
};

export const useLawyerProfileData = () => {
	return useGenericQuery({
		keys: [`lawyerProfile`],
		apiEndpoint: `lawyer/dashboard/profile`,
		filterName: "lawyerProfile",
	});
};

export const useBlogsData = () => {
	return useGenericQuery({
		keys: [`blogs`],
		apiEndpoint: `blogs`,
		filterName: "blogs",
	});
};

export const useTopLawyersData = () => {
	return useGenericQuery({
		keys: [`toplawyers`],
		apiEndpoint: `lawyers/top-rated`,
		filterName: "toplawyers",
	});
};

export const useBookingData = () => {
	return useGenericQuery({
		keys: [`booking`],
		apiEndpoint: `booking/all`,
		filterName: "booking",
	});
};

export const useSingleBlogData = (id) => {
	return useGenericQuery({
		keys: ["blog", id],
		apiEndpoint: `blogs/${id}`,
		filterName: "blog",
	});
};
