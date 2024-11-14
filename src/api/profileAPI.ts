import InstanceAPI from "./instanceAPI.ts";
import {UpdateProfileInfoInterface} from "../types/profileInterfaces";

export const profileAPI = {
	getProfile(userId: number | string) {
		return InstanceAPI.get(`profile/${userId}`);
	},
	getStatus(userId: number | string) {
		return InstanceAPI.get('profile/status/' + userId);
	},
	putStatus(status: string) {
		return InstanceAPI.put('profile/status', {
			status
		});
	},
	putPhoto(photoFile: File) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return InstanceAPI.put('profile/photo/', formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	},
	putProfileInfo(data: UpdateProfileInfoInterface) {
		return InstanceAPI.put('profile', data, {})
	}
}