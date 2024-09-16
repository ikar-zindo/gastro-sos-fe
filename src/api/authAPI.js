import axios from "axios";
import InstanceAPI from "./instanceAPI.js";

const instance = axios.create(InstanceAPI)

export const AuthAPI = {
	me() {
		return instance.get('auth/me')
			.then(response => response)
			.catch(error => {
				console.error('Ошибка при запросе:', error);
			});
	},

	login() {
		return instance.delete('auth/login')
			.then();
	},

	logout() {
		return instance.post('auth/login', {})
			.then();
	}
}