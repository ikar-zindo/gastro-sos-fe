import {authAPI} from "../api/authAPI.js";
import {createSlice} from "@reduxjs/toolkit";

const authReducer = createSlice({
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
			return {
				...state,
				...action.payload,
				isAuth: true
			}
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

export const login = (data) => (dispatch) => {
	authAPI.login(data).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setToken(response.data.data.token))
			console.log("Login success");
			console.log(response);
		}
	})
}

export const {
	setAuthDataAction,
	setToken} = authReducer.actions;
export default authReducer.reducer;