import {profileAPI} from "../api/profileAPI.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {globalErrorMessages} from "../utils/global-error-messages.js";
import {useSelector} from "react-redux";
import {getAuthSelector, getAuthUserId} from "../selectors/auth-selectors.js";

const profileReducer = createSlice({
	name: "profile",
	initialState: {
		profile: null,
		posts: [],
		status: "",
		loading: false,
		errorMessages: []
	},
	reducers: {
		setErrorMessagesAction: (state, action) => {
			state.errorMessages = [action.payload];
		},
		savePhotoSuccess: (state, action) => {
			return {
				...state,
				profile: {...state.profile, photos: action.payload},
			}
		}
	},
	extraReducers: builder => {
		builder
			// PROFILE LOADING PROCESSING
			.addCase(setUserProfile.pending, (state) => {
				state.loading = true;
				state.errorMessages = [];
			})
			.addCase(setUserProfile.fulfilled, (state, action) => {
				state.loading = false;
				state.profile = action.payload;
			})
			.addCase(setUserProfile.rejected, (state, action) => {
				state.loading = false;
				state.errorMessages = [action.payload];
			})

			// PROCESSING USER STATUS LOADING
			.addCase(setUserProfileStatus.fulfilled, (state, action) => {
				state.status = action.payload;
			})
			.addCase(setUserProfileStatus.rejected, (state, action) => {
				state.errorMessages = [action.payload];
			})

			// UPDATE USER PROFILE STATUS
			.addCase(updateUserProfileStatus.fulfilled, (state, action) => {
				state.status = action.payload;
			})
			.addCase(updateUserProfileStatus.rejected, (state, action) => {
				state.errorMessages = [action.payload];
			});
	}
});

// SET USER PROFILE
export const setUserProfile = createAsyncThunk(
	"profile/setUserProfile",
	async (userIdUrl, {rejectWithValue}) => {
		try {
			const response = await profileAPI.getProfile(userIdUrl);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || globalErrorMessages.ERROR_UPDATING_STATUS);
		}
	}
);

// GET USER PROFILE STATUS
export const setUserProfileStatus = createAsyncThunk(
	"profile/setUserProfileStatus",
	async (userIdUrl, {rejectWithValue}) => {
		try {
			const response = await profileAPI.getStatus(userIdUrl);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || globalErrorMessages.ERROR_UPDATING_STATUS);
		}
	}
);

// UPDATE USER PROFILE STATUS
export const updateUserProfileStatus = createAsyncThunk(
	"profile/updateUserProfileStatus",
	async (status, {rejectWithValue}) => {
		try {
			const response = await profileAPI.putStatus(status);
			if (response.data.resultCode === 0) {
				return status;
			} else {
				return rejectWithValue(globalErrorMessages.ERROR_UPDATING_STATUS);
			}
		} catch (error) {
			return rejectWithValue(error.response?.data || globalErrorMessages.ERROR_UPDATING_STATUS);
		}
	}
);

// GET USER PROFILE
export const getUserProfile = createAsyncThunk(
	'profile/getUserProfile',
	async (userIdUrl, {rejectWithValue}) => {
		try {
			const response = await profileAPI.getProfile(userIdUrl);
			return response.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

// PUT PROFILE PHOTO
export const putPhoto = (file) => async (dispatch) => {
	const response = await profileAPI.putPhoto(file);

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
}

// PUT PROFILE PHOTO
export const putProfileInfo = (data) => async (dispatch, getState) => {
	const authUserId = getState().auth.id;
	const response = await profileAPI.putProfileInfo(data);
	try {
		if (response.status === 200) {
			if (response.data.resultCode === 0) {
				dispatch(setUserProfile(authUserId));
				return null
			} else if (response.data.resultCode === 1) {
				return response.data.messages; // TODO: походу красивее через Promise
				// return Promise.reject(response.data.messages);
			}
		}
	} catch (error) {
		return response.data.messages;
	}
}

export const {
	setErrorMessagesAction,
	savePhotoSuccess,
} = profileReducer.actions;
export default profileReducer.reducer;