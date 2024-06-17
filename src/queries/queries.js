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
