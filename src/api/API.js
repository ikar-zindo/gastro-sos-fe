const API = {
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": import.meta.env.VITE_API_KEY,
		"Authorization": "Bearer " + import.meta.env.VITE_AUTH_TOKEN
	}
};

export default API;