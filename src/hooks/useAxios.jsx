import axios from "axios";
import { useStore } from "../zustand/store";

const API_LINK = "https://suits.mrehabazmy.com/api"; //Live

export default function useAxios() {
    const authData = useStore((state) => state.authData);
    console.log(authData)
    return axios.create({
        baseURL: API_LINK,
        headers: {
            Authorization: `Bearer ${authData ? authData.token : ""}`,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
}
