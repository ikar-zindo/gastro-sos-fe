import axios from "axios";
import API from "./API.js";

const instance = axios.create(API)

export const ProfileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
			.then(response => response.data);
	},

	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
			.then(response => response.data);
	},

	putStatus(userId) {
		return instance.put(`profile/status/${userId}`, {})
			.then(response => response.data);
	},

	putPhoto(userId) {
		return instance.get(`profile/photo/${userId}`)
			.then(response => response.data);
	}
}