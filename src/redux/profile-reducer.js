import {ProfileAPI} from "../api/ProfileAPI.js";

const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
	profile: null,
	posts: []
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}
	}

	return state;
}

export const setUserProfileAction = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserProfile = (userIdUrl) => (dispatch) => {
	ProfileAPI.getProfile(userIdUrl).then(response => {
		dispatch(setUserProfileAction(response.data));
	})

}

export default profileReducer;