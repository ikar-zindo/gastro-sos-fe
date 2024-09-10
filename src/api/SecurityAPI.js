import axios from "axios";
import API from "./API.js";

const instance = axios.create(API)

export const UsersAPI = {
	getCaptcha () {
		return instance.get('/security/get-captcha-url')
			.then(response => response.data);
	}
}