import InstanceAPI from "./instanceAPI.ts";

export const securityAPI = {
	getCaptcha () {
		return InstanceAPI.get('security/get-captcha-url');
	}
}