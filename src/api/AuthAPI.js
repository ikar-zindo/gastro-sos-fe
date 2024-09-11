import axios from "axios";
import InstanceAPI from "./InstanceAPI.js";

const instance = axios.create(InstanceAPI)

export const AuthAPI = {
	me() {
		return instance.get('auth/me')
			.then(response => response.data)
			.catch(error => {
				console.error('Ошибка при запросе:', error);
			});
	},

	login() {
		return instance.delete('auth/login')
			.then(response => response.data);
	},

	logout() {
		return instance.post('auth/login', {})
			.then(response => response.data);
	}
}