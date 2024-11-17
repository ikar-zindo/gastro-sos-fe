import instanceAPI from "./instanceAPI";
import {LoginDataRequest, LoginDataResponse, MeDataResponse} from "../types/api/auth-types";
import {APIResponseType} from "../types/api/common-types";

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