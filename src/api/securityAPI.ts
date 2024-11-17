import instanceAPI from "./instanceAPI.ts";
import {CaptchaResponse} from "../types/api/security-types";

export const securityAPI = {
	getCaptcha() {
		return instanceAPI.get<CaptchaResponse>('security/get-captcha-url');
	}
}