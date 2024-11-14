import axios from "axios";
import InstanceAPI from "./instanceAPI.ts";
import {UpdateProfileInfoInterface} from "../types/profileInterfaces";

const instance = axios.create(InstanceAPI)

export const profileAPI = {
	getProfile(userId: number | string) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId: number | string) {
		return instance.get('profile/status/' + userId);
	},
	putStatus(status: string) {
		return instance.put('profile/status', {
			status
		});
	},
	putPhoto(photoFile: File) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance.put('profile/photo/', formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	},
	putProfileInfo(data: UpdateProfileInfoInterface) {
		return instance.put('profile', data, {})
	}
}