import instanceAPI from "./instanceAPI";
import {PhotosInterface, ProfileInfoInterface, UpdateProfileInfoInterface} from "../types/interfaces/profile-interfaces";
import {APIResponseType} from "../types/api/common-types";

export const profileAPI = {
	getProfile(userId: number | string) {
		return instanceAPI.get<ProfileInfoInterface>(`profile/${userId}`);
	},
	getStatus(userId: number | string) {
		return instanceAPI.get<string>('profile/status/' + userId);
	},
	putStatus(status: string) {
		return instanceAPI.put<APIResponseType>('profile/status', {status});
	},
	putPhoto(photoFile: File) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instanceAPI.put<APIResponseType<{photos: PhotosInterface}>>('profile/photo/', formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	},
	putProfileInfo(data: UpdateProfileInfoInterface) {
		return instanceAPI.put<APIResponseType>('profile', data, {})
	}
}