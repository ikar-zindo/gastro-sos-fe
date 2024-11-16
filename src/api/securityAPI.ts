import instanceAPI from "./instanceAPI.ts";
import {CaptchaResponse} from "../types/api/securityTypes.ts";

export const securityAPI = {
	getCaptcha() {
		return instanceAPI.get<CaptchaResponse>('security/get-captcha-url');
	}
}