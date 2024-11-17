export type APIResponseType<D = {}> = {
	data: D;
	resultCode: RC;
	messages: Array<string>;
};

export enum RC {
	Success = 0,
	Error = 1,
	CaptchaIsRequired = 10,
	BadRequest = 400,
	Unauthorized = 401,
	Forbidden = 403,
}