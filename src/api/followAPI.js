import axios from "axios";
import InstanceAPI from "./instanceAPI.js";

const instance = axios.create(InstanceAPI)

export const FollowAPI = {

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