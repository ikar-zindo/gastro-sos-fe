import {profileAPI} from "../api/profileAPI.js";
import {createSlice} from "@reduxjs/toolkit";

const profileReducer = createSlice( {
	name: "profile",
	initialState: {
		profile: null,
		posts: [],
		status: ""
	},
	reducers: {
		setUserProfileAction: (state, action) => {
			state.profile = action.payload;
		},
		setUserProfileStatusAction: (state, action) => {
			state.status = action.payload
		}
	}
});

export const {
	setUserProfileAction,
	setUserProfileStatusAction,
} = profileReducer.actions;

export const setUserProfile = (userIdUrl) => async (dispatch) => {
	profileAPI.getProfile(userIdUrl).then(response => {
		dispatch(setUserProfileAction(response.data));
	})
}

export const setUserProfileStatus = (userIdUrl) => async (dispatch) => {
	profileAPI.getStatus(userIdUrl).then(response => {
		dispatch(setUserProfileStatusAction(response.data));
	})
}

export const updateUserProfileStatus = (status) => async (dispatch) => {
	profileAPI.putStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setUserProfileStatusAction(status));
		}
	})
}

export default profileReducer.reducer;