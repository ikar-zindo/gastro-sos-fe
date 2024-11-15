import instanceAPI from "./instanceAPI";
import {APIResponseType} from "../types/api/commonTypes";
import {AxiosPromise} from "axios";

export const followAPI = {
	getFollowUser(userId: number | string) {
		return instanceAPI.get(`follow/${userId}`);
	},

	followUser(userId: number | string) {
		return instanceAPI.post<APIResponseType>(`follow/${userId}`, {});
	},

	unfollowUser(userId: number | string) {
		return instanceAPI.delete(`follow/${userId}`) as AxiosPromise<APIResponseType>;
	}
}