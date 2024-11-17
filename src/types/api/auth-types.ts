export type LoginDataRequest = {
	email: string;
	password: string;
	rememberMe: boolean;
	captcha: string;
}

export type MeDataResponse = {
	id: number;
	login: string;
	email: string;
}

export type LoginDataResponse = {
	id: number;
	token: string;
}