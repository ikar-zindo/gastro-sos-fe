import axios from "axios";
import API from "./API.js";

const instance = axios.create(API)

export const FollowAPI = {

	getFollowUser(userId) {
		return instance.get(`follow/${userId}`)
			.then(response => response.data)
	},

	followUser(userId) {
		return instance.post(`follow/${userId}`, {})
			.then(response => response.data)
	},

	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	}
}