import axios from "axios";

const instanceAPI = axios.create({
	// @ts-ignore
	baseURL: import.meta.env.VITE_BASE_URL as string,
	withCredentials: true,
	headers: {
		// @ts-ignore
		"API-KEY": import.meta.env.VITE_API_KEY as string,
		// @ts-ignore
		"Authorization": "Bearer " + (import.meta.env.VITE_AUTH_TOKEN as string)
	}
});

export default instanceAPI;