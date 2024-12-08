import axios from "axios";

const instanceAPI = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: true,
	headers: {
		"API-KEY": import.meta.env.VITE_API_KEY,
		"Authorization": "Bearer " + import.meta.env.VITE_AUTH_TOKEN
	}
});

export default instanceAPI;