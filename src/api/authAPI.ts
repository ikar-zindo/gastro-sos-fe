import instanceAPI from "./instanceAPI";
import {LoginData} from "../types/interfaces/authInterfaces";

export const authAPI = {
	me() {
		return instanceAPI.get('auth/me');
	},

	logout() {
		return instanceAPI.delete('auth/login');
	},

	login(data: LoginData) {
		return instanceAPI.post('auth/login', data);
	}
}