import axios from "axios";
import InstanceAPI from "./instanceAPI.js";

const instance = axios.create(InstanceAPI)

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},

	getStatus(userId) {
		return instance.get('profile/status/' + userId);
	},

	putStatus(status) {
		return instance.put('profile/status', {
			status
		});
	},

	putPhoto(userId) {
		return instance.get('profile/photo/' + userId);
	}
}