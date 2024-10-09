import {authAPI} from "../api/authAPI.js";
import {createSlice} from "@reduxjs/toolkit";
import {securityAPI} from "../api/securityAPI.js";

const authReducer = createSlice({
	name: "auth",
	initialState: {
		id: null,
		login: null,
		email: null,
		isAuth: false,
		token: '',
		buttonValue: "Login",
		captchaPlaceholder: "Enter CAPTCHA",
		captchaUrl: null
	},
	reducers: {
		setAuthDataAction: (state, action) => {
			if (action.payload) {
				Object.assign(state, action.payload);
				state.isAuth = true;
			}
		},
		setTokenAction: (state, action) => {
			state.token = action.payload;
		},
		logoutAction: (state) => { // reset state
			const data = {
				id: null,
				login: null,
				email: null,
				isAuth: false,
				captchaUrl: null,
			};
			Object.assign(state, data);
		},
		setCaptchaUrl: (state, action) => {
			if (action.payload) {
				state.captchaUrl = action.payload;
			}
		}
	}
});

export const getAuth = () => async (dispatch) => {
	const response = await authAPI.me()
	try {
		if (response.status === 200 && response.data.resultCode === 0) {
			dispatch(setAuthDataAction(response.data.data));
		}
	} catch (error) {
		console.error("Error during login", error);
		return ['Server error occurred']; // Ошибка на сервере
	}
};

export const login = (data) => async (dispatch) => {
	const response = await authAPI.login(data);
	try {
		if (response.status === 200) {
			if (response.data.resultCode === 0) {
				dispatch(setTokenAction(response.data.data.token))
				dispatch(getAuth());
				return null;

			} else if (response.data.resultCode === 10) {
				dispatch(getCaptcha());
				return response.data.messages;

			} else {
				return response.data.messages;
			}
		}
	} catch (error) {
		console.error("Error during login", error);
		return ['Server error occurred']; // Ошибка на сервере
	}
}

export const logout = () => async (dispatch) => {
	authAPI.logout().then(response => {
		if (response.status === 200) {
			dispatch(logoutAction());
		}
	})
};

export const getCaptcha = () => async (dispatch) => {
	securityAPI.getCaptcha().then(response => {
		if (response.status === 200) {
			dispatch(setCaptchaUrl(response.data.url));
		}
	})
};

export const {
	setAuthDataAction,
	setTokenAction,
	logoutAction,
	setCaptchaUrl,
} = authReducer.actions;

export default authReducer.reducer;