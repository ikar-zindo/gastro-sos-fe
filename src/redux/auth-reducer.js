import {AuthAPI} from "../api/AuthAPI.js";

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
				isAuth: true
			}
		}
	}

	return state;
}

export const setAuthDataAction = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});

export const getAuth = () => (dispatch) => {
	AuthAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			let {id, login, email} = response.data.data
			dispatch(setAuthDataAction(id, login, email));
		}
	});
	
}

export default authReducer;