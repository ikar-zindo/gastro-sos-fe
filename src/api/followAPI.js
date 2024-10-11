import axios from "axios";
import instanceAPI from "./instanceAPI.js";

const instance = axios.create(instanceAPI)

export const followAPI = {
	getFollowUser(userId) {
		return instance.get(`follow/${userId}`);
	},

	followUser(userId) {
		return instance.post(`follow/${userId}`, {});
	},

	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`);
	}
}