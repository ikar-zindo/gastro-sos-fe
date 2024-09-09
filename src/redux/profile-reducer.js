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

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;