import InstanceAPI from "./instanceAPI.ts";
import {LoginData} from "../types/authInterfaces";

export const authAPI = {
	me() {
		return InstanceAPI.get('auth/me');
	},

	logout() {
		return InstanceAPI.delete('auth/login');
	},

	login(data: LoginData) {
		return InstanceAPI.post('auth/login', data);
	}
}