import axios from "axios";
import InstanceAPI from "./instanceAPI.ts";

const instance = axios.create(InstanceAPI)

export const securityAPI = {
	getCaptcha () {
		return instance.get('security/get-captcha-url');
	}
}