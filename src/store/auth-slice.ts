import {authAPI} from "../api/authAPI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {securityAPI} from "../api/securityAPI";
import {globalErrorMessages} from "../utils/global-error-messages";
import {AppDispatch} from "./store";
import {AuthState} from "../types/interfaces/auth-interfaces";
import {LoginDataRequest, MeDataResponse} from "../types/api/auth-types";
import {RC} from "../types/api/common-types";

const initialState: AuthState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	token: null,
	captchaUrl: null
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuthDataAction: (state, action: PayloadAction<MeDataResponse>) => {
			if (action.payload) {
				Object.assign(state, action.payload);
				state.isAuth = true;
			}
		},
		setTokenAction: (state, action: PayloadAction<string>) => {
			return {...state, token: action.payload};
		},
		logoutAction: (state) => { // reset state
			Object.assign(state, initialState);
		},
		setCaptchaUrl: (state, action: PayloadAction<string | null>) => {
			if (action.payload) {
				return {...state, captchaUrl: action.payload};
				// state.captchaUrl = action.payload;
			}
		}
	}
});

// ASYNCHRONOUS ACTIONS
export const me = () => async (dispatch: AppDispatch) => {
	const response = await authAPI.me()

	try {
		if (response.status === 200 && response.data.resultCode === RC.Success) {
			dispatch(setAuthDataAction(response.data.data));
		} else {
			return [globalErrorMessages.UNAUTHORIZED_ACCESS];
		}
	} catch (error) {
		console.error("Error during login", error);
		return [globalErrorMessages.SERVER_ERROR_OCCURRED]; // Ошибка на сервере
	}
};

export const login = (data: LoginDataRequest) => async (dispatch: AppDispatch) => {
	try {
		const response = await authAPI.login(data);
		if (response.status === 200) {
			if (response.data.resultCode === RC.Success) {
				dispatch(setTokenAction(response.data.data.token))
				dispatch(me());
				return null;

			} else if (response.data.resultCode === RC.CaptchaIsRequired) {
				dispatch(getCaptcha());
				return response.data.messages;

			} else {
				return response.data.messages;
			}
		}
	} catch (error) {
		console.error("Error during login:", error);
		return [globalErrorMessages.SERVER_ERROR_OCCURRED]; // Ошибка на сервере
	}
}

export const logout = () => async (dispatch: AppDispatch) => {
	try {
		const response = await authAPI.logout()
		if (response.status === 200) {
			dispatch(logoutAction());
		}
	} catch (error) {
		console.error("Error during login:", error);
		return [globalErrorMessages.SERVER_ERROR_OCCURRED]; // Ошибка на сервере
	}
};

export const getCaptcha = () => async (dispatch: AppDispatch) => {
	try {
		const response = await securityAPI.getCaptcha()
		if (response.status === 200) {
			dispatch(setCaptchaUrl(response.data.url));
		}
	} catch (error) {
		console.error("Error during login:", error);
	}
};

export const {
	setAuthDataAction,
	setTokenAction,
	logoutAction,
	setCaptchaUrl,
} = authSlice.actions;
export default authSlice.reducer;