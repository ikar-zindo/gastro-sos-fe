import axios from "axios";
import instanceAPI from "./instanceAPI.js";

const instance = axios.create(instanceAPI)

export const securityAPI = {
	getCaptcha () {
		return instance.get('/security/get-captcha-url');
	}
}