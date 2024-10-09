import {authAPI} from "../api/authAPI.js";
import {createSlice} from "@reduxjs/toolkit";

const authReducer = createSlice({
	name: "auth",
	initialState: {
		id: null,
		login: null,
		email: null,
		isAuth: false,
		token: '',
		buttonValue: "Login"
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
		logoutAction: (state) => {
			const data = {id: null, login: null, email: null, isAuth: false};
			Object.assign(state, data);
		}
	}
});

export const getAuth = () => async (dispatch) => {
	authAPI.me().then(response => {
		if (response.status === 200) {
			dispatch(setAuthDataAction(response.data.data));
		}
	});
}

export const login = (data) => async (dispatch) => {
	authAPI.login(data).then(response => {
		if (response.status === 200) {
			dispatch(setTokenAction(response.data.data.token))
			dispatch(getAuth());
		}
	})
}

export const logout = () => async (dispatch) => {
	authAPI.logout().then(response => {
		if (response.status === 200) {
			dispatch(logoutAction());
		}
	})
}

export const {
	setAuthDataAction,
	setTokenAction,
	logoutAction
} = authReducer.actions;

export default authReducer.reducer;