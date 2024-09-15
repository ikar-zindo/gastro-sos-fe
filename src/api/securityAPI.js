import axios from "axios";
import InstanceAPI from "./instanceAPI.js";

const instance = axios.create(InstanceAPI)

export const UsersAPI = {
	getCaptcha () {
		return instance.get('/security/get-captcha-url');
	}
}