import axios from "axios";
import InstanceAPI from "./instanceAPI.ts";
import {LoginData} from "../types/authInterfaces";

const instance = axios.create(InstanceAPI)

export const authAPI = {
	me() {
		return instance.get('auth/me');
	},

	logout() {
		return instance.delete('auth/login');
	},

	login(data: LoginData) {
		return instance.post('auth/login', data);
	}
}