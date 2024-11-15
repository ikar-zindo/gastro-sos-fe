import instanceAPI from "./instanceAPI";
import {LoginDataRequest, LoginDataResponse, MeDataResponse} from "../types/api/authTypes";
import {APIResponseType} from "../types/api/commonTypes";

export const authAPI = {
	me() {
		return instanceAPI.get<APIResponseType<MeDataResponse>>('auth/me');
	},

	login(data: LoginDataRequest) {
		return instanceAPI.post<APIResponseType<LoginDataResponse>>('auth/login', data);
	},

	logout() {
		return instanceAPI.delete<APIResponseType>('auth/login');
	},
}