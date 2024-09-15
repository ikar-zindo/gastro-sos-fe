import axios from "axios";
import InstanceAPI from "./InstanceAPI.js";

const instance = axios.create(InstanceAPI)

export const ProfileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},

	getStatus(userId) {
		return instance.get(`profile/status/${userId}`);
	},

	putStatus(status) {
		return instance.put('profile/status', {});
	},

	putPhoto(userId) {
		return instance.get(`profile/photo/${userId}`);
	}
}