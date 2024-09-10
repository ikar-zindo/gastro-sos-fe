import axios from "axios";
import API from "./API.js";

const instance = axios.create(API)

export const UsersAPI = {
	getAuth() {
		return instance.get('auth/me')
			.then(response => response.data);
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