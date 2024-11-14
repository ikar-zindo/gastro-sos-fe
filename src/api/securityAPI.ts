import instanceAPI from "./instanceAPI.ts";

export const securityAPI = {
	getCaptcha () {
		return instanceAPI.get('security/get-captcha-url');
	}
}