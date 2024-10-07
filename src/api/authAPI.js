import axios from "axios";
import InstanceAPI from "./instanceAPI.js";

const instance = axios.create(InstanceAPI)

export const authAPI = {
	me() {
		return instance.get('auth/me');
	},

	logout(data) {
		return instance.delete('auth/login');
	},

	login(data) {
		return instance.post('auth/login', data);
	}
}