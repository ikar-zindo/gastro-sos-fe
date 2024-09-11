import axios from "axios";
import InstanceAPI from "./InstanceAPI.js";

const instance = axios.create(InstanceAPI)

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