import axios from 'axios';
import instanceAPI from "./instanceAPI";

const instance = axios.create(instanceAPI)

export const followAPI = {
	getFollowUser(userId: number | string) {
		return instance.get(`follow/${userId}`);
	},

	followUser(userId: number | string) {
		return instance.post(`follow/${userId}`, {});
	},

	unfollowUser(userId: number | string) {
		return instance.delete(`follow/${userId}`);
	}
}