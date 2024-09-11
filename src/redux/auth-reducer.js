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

export const setAuthData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});

export const getAuth = () => (dispatch) => {
	AuthAPI.me().then(data => {
		if (data.resultCode === 0) {
			let {id, login, email} = data.data
			dispatch(setAuthData(id, login, email));
		}
	});
	
}

export default authReducer;