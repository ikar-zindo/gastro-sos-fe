import instanceAPI from "./instanceAPI.ts";
import {UpdateProfileInfoInterface} from "../types/interfaces/profileInterfaces";

export const profileAPI = {
	getProfile(userId: number | string) {
		return instanceAPI.get(`profile/${userId}`);
	},
	getStatus(userId: number | string) {
		return instanceAPI.get('profile/status/' + userId);
	},
	putStatus(status: string) {
		return instanceAPI.put('profile/status', {
			status
		});
	},
	putPhoto(photoFile: File) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instanceAPI.put('profile/photo/', formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	},
	putProfileInfo(data: UpdateProfileInfoInterface) {
		return instanceAPI.put('profile', data, {})
	}
}