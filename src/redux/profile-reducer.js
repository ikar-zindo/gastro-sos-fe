import {profileAPI} from "../api/profileAPI.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const profileReducer = createSlice( {
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
	async (userIdUrl, { rejectWithValue }) => {
		try {
			const response = await profileAPI.getProfile(userIdUrl);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || 'Error loading profile');
		}
	}
);

// GET USER PROFILE STATUS
export const setUserProfileStatus = createAsyncThunk(
	"profile/setUserProfileStatus",
	async (userIdUrl, { rejectWithValue }) => {
		try {
			const response = await profileAPI.getStatus(userIdUrl);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data || 'Error loading status');
		}
	}
);

// UPDATE USER PROFILE STATUS
export const updateUserProfileStatus = createAsyncThunk(
	"profile/updateUserProfileStatus",
	async (status, { rejectWithValue }) => {
		try {
			const response = await profileAPI.putStatus(status);
			if (response.data.resultCode === 0) {
				return status;
			} else {
				return rejectWithValue('Error updating status');
			}
		} catch (error) {
			return rejectWithValue(error.response?.data || 'Error updating status');
		}
	}
);

// GET USER PROFILE
export const getUserProfile = createAsyncThunk(
	'profile/getUserProfile',
	async (userIdUrl, { rejectWithValue }) => {
		try {
			const response = await profileAPI.getProfile(userIdUrl);
			return response.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const {
	setErrorMessagesAction
} = profileReducer.actions;
export default profileReducer.reducer;