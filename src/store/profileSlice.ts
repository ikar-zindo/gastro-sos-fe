import {profileAPI} from "../api/profileAPI";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {globalErrorMessages} from "../utils/global-error-messages";
import {AppDispatch} from "./store";
import {ProfileInfoInterface, ProfileState, ProfileTab, UpdateProfileInfoInterface} from "../types/interfaces/profileInterfaces";

const initialState: ProfileState = {
	profile: null,
	status: "",
	loading: false,
	errorMessages: [],
	selectedTab: ProfileTab.Bio
}

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setErrorMessagesAction: (state, action: PayloadAction<string>) => {
			state.errorMessages = [action.payload];
		},
		savePhotoSuccess: (state, action: PayloadAction<{ small: string; large: string }>) => {
			if (state.profile) {
				return {
					...state,
					profile: {...state.profile, photos: action.payload},
				}
			}
		},
		setSelectedTab: (state, action: PayloadAction<ProfileTab>) => {
			return {
				...state,
				selectedTab: action.payload
			};
		}
	},
	extraReducers: builder => {
		builder
			// PROFILE LOADING PROCESSING
			.addCase(setUserProfile.pending, (state) => {
				state.loading = true;
				state.errorMessages = [];
			})
			.addCase(setUserProfile.fulfilled, (state, action: PayloadAction<ProfileInfoInterface>) => {
				state.loading = false;
				state.profile = action.payload;
			})
			.addCase(setUserProfile.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false;
				state.errorMessages = [action.payload];
			})

			// PROCESSING USER STATUS LOADING
			.addCase(setUserProfileStatus.fulfilled, (state, action: PayloadAction<string>) => {
				state.status = action.payload;
			})
			.addCase(setUserProfileStatus.rejected, (state, action: PayloadAction<any>) => {
				state.errorMessages = [action.payload];
			})

			// UPDATE USER PROFILE STATUS
			.addCase(updateUserProfileStatus.fulfilled, (state, action: PayloadAction<string>) => {
				state.status = action.payload;
			})
			.addCase(updateUserProfileStatus.rejected, (state, action: PayloadAction<any>) => {
				state.errorMessages = [action.payload];
			});
	}
});

// ASYNCHRONOUS ACTIONS
// SET USER PROFILE
export const setUserProfile = createAsyncThunk<ProfileInfoInterface, (number | string)>(
	"profile/setUserProfile",
	async (userIdUrl, {rejectWithValue}) => {
		try {
			const response = await profileAPI.getProfile(userIdUrl);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response?.data || globalErrorMessages.ERROR_UPDATING_STATUS);
		}
	}
);

// GET USER PROFILE STATUS
export const setUserProfileStatus = createAsyncThunk<string, number | string>(
	"profile/setUserProfileStatus",
	async (userIdUrl, {rejectWithValue}) => {
		try {
			const response = await profileAPI.getStatus(userIdUrl);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response?.data || globalErrorMessages.ERROR_UPDATING_STATUS);
		}
	}
);

// UPDATE USER PROFILE STATUS
export const updateUserProfileStatus = createAsyncThunk<string, string>(
	"profile/updateUserProfileStatus",
	async (status, {rejectWithValue}) => {
		try {
			const response = await profileAPI.putStatus(status);
			if (response.data.resultCode === 0) {
				return status;
			} else if (response.data.resultCode === 1) {
				// dispatch(setErrorMessagesAction(response.data.messages));
				return response.data;
			} else {
				return rejectWithValue(globalErrorMessages.ERROR_UPDATING_STATUS);
			}
		} catch (error: any) {
			return rejectWithValue(error.response?.data || globalErrorMessages.ERROR_UPDATING_STATUS);
		}
	}
);

// GET USER PROFILE
export const getUserProfile = createAsyncThunk<ProfileInfoInterface, number | string>(
	'profile/getUserProfile',
	async (userId, {rejectWithValue}) => {
		try {
			const response = await profileAPI.getProfile(userId);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);

// PUT PROFILE PHOTO
export const putPhoto = (file: File) => async (dispatch: AppDispatch) => {
	const response = await profileAPI.putPhoto(file);

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
}

// PUT PROFILE PHOTO
export const putProfileInfo = (data: UpdateProfileInfoInterface) => async (dispatch: AppDispatch, getState: any) => {
	const authUserId = getState().auth.id;
	try {
		const response = await profileAPI.putProfileInfo(data);
		if (response.status === 200) {
			if (response.data.resultCode === 0) {
				dispatch(setUserProfile(authUserId));
				return null
			} else if (response.data.resultCode === 1) {
				return response.data.messages; // TODO: походу красивее через Promise
				// return Promise.reject(response.data.messages);
			}
		}
	} catch (error: any) {
		return error;
	}
}

export const {
	setErrorMessagesAction,
	savePhotoSuccess,
	setSelectedTab,
} = profileSlice.actions;
export default profileSlice.reducer;