import axios from "axios";

const instanceAPI = axios.create({
	// @ts-ignore
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: true,
	headers: {
		// @ts-ignore
		"API-KEY": import.meta.env.VITE_API_KEY,
		// @ts-ignore
		"Authorization": "Bearer " + import.meta.env.VITE_AUTH_TOKEN
	}
});

export default instanceAPI;