export interface AuthState {
	id: number | string | null;
	login: string | null;
	email: string | null;
	isAuth: boolean;
	token: string | null;
	captchaUrl: string | null;
	// TODO: imgUrl
}