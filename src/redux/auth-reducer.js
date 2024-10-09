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
		captchaUrl: null,
		errorMessages: []
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
		},
		setErrorMessage: (state, action) => {
			state.errorMessage = action.payload.messages.join('. ');
		}
	}
});

export const getAuth = () => async (dispatch) => {
	authAPI.me().then(response => {
		if (response.status === 200 && response.data.resultCode === 0) {
			dispatch(setAuthDataAction(response.data.data));
		}
	}).catch(error => {
		console.log(error);
	});
};

export const login = (data) => async (dispatch) => {
	authAPI.login(data).then(response => {
		if (response.status === 200) {
			if (response.data.resultCode === 0) {
				dispatch(setTokenAction(response.data.data.token))
				dispatch(getAuth());

			} else if (response.data.resultCode === 10) {
				console.log(response);
				console.log(response.data);
				dispatch(getCaptcha());
				dispatch(setErrorMessage(response.data));

			} else {
				dispatch(setErrorMessage(response.data));
			}
		}
	})
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
	setErrorMessage
} = authReducer.actions;

export default authReducer.reducer;