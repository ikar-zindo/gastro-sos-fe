export interface AuthState {
	id: number | string | null;
	login: string | null;
	email: string | null;
	isAuth: boolean;
	token: string | null;
	captchaUrl: string | null;
}

export interface AuthData {
	id: number;
	login: string;
	email: string;
	token: string;
}

export interface LoginData {
	email: string;
	password: string;
	rememberMe: boolean;
	captcha: string;
}