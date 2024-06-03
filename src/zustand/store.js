import Cookies from "js-cookie";
import { create } from "zustand";
const lang = localStorage.getItem("lang") || "ltr";
document.documentElement.dir = lang;
const authData = Cookies.get("auth_data");
const store = (set) => ({
	authData: authData ? JSON.parse(authData) : "",
	lang: lang,
	navBarOpened: false,
	setNavBarOpened: (value) => set(() => ({ navBarOpened: value })),
	userDropDown: false,
	setUserDropDown: (value) => set(() => ({ userDropDown: value })),
	editLang: (value) => {
		console.log("first");
		set(() => ({
			lang: value,
		}));
		localStorage.setItem("lang", value);
		document.documentElement.dir = value;
	},
	setAuthData: (data) => {
		set(() => ({ authData: data }));
		Cookies.set("auth_data", JSON.stringify(data));
	},
});
export const useStore = create(store);
