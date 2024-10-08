import {authAPI} from "../api/authAPI.js";
import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		id: null,
		login: null,
		email: null,
		isAuth: false,
		token: ''
	},
	reducers: {
		setAuthDataAction: (state, action) => {
			Object.assign(state, action.payload);
			state.isAuth = true;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		}
	}
});

export const getAuth = () => async (dispatch) => {
	authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthDataAction(response.data.data));
		}
	});
}

export const login = (data) => async (dispatch) => {
	authAPI.login(data).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setToken(response.data.data.token))
			dispatch(getAuth());
		}
	})
}

export const {
	setAuthDataAction,
	setToken,
} = authSlice.actions;

export default authSlice.reducer;