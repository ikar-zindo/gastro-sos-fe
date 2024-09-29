import {profileAPI} from "../api/profileAPI.js";

const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_PROFILE_STATUS = 'SET-USER-PROFILE-STATUS'

let initialState = {
	profile: null,
	posts: [],
	status: ""
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}

		case SET_USER_PROFILE_STATUS: {
			return {...state, status: action.status}
		}
	}

	return state;
}

export const setUserProfileAction = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserProfileStatusAction = (status) => ({type: SET_USER_PROFILE_STATUS, status})

export const setUserProfile = (userIdUrl) => (dispatch) => {
	profileAPI.getProfile(userIdUrl).then(response => {
		dispatch(setUserProfileAction(response.data));
	})
}

export const setUserProfileStatus = (userIdUrl) => (dispatch) => {
	profileAPI.getStatus(userIdUrl).then(response => {
		dispatch(setUserProfileStatusAction(response.data));
	})
}

export const updateUserProfileStatus = (status) => (dispatch) => {
	profileAPI.putStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setUserProfileStatusAction(status));
		}
	})
}

export default profileReducer;