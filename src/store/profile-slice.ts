import {profileAPI} from "../api/profileAPI";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {globalErrorMessages} from "../utils/global-error-messages";
import {AppDispatch, RootState} from "./store";
import {
	PhotosInterface,
	ProfileInfoInterface,
	ProfileState,
	ProfileTab,
	UpdateProfileInfoInterface
} from "../types/interfaces/profile-interfaces";
import {APIResponseType} from "../types/api/common-types";

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
		savePhotoSuccessAction: (state, action: PayloadAction<PhotosInterface>) => {
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
			.addCase(setUserProfileThunk.pending, (state) => {
				state.loading = true;
				state.errorMessages = [];
			})
			.addCase(setUserProfileThunk.fulfilled, (state, action: PayloadAction<ProfileInfoInterface>) => {
				state.loading = false;
				state.profile = action.payload;
			})
			.addCase(setUserProfileThunk.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false;
				state.errorMessages = [action.payload];
			})

			// PROCESSING USER STATUS LOADING
			.addCase(setUserProfileStatusThunk.fulfilled, (state, action: PayloadAction<string>) => {
				state.status = action.payload;
			})
			.addCase(setUserProfileStatusThunk.rejected, (state, action: PayloadAction<any>) => {
				state.errorMessages = [action.payload];
			})

			// UPDATE USER PROFILE STATUS
			.addCase(updateUserProfileStatusThunk.fulfilled, (state, action: PayloadAction<string | APIResponseType>) => {
				if (typeof action.payload === "string") {
					state.status = action.payload;
				} else {
					state.errorMessages = action.payload.messages?.length
						? action.payload.messages
						: [globalErrorMessages.ERROR_UPDATING_STATUS];
				}
			})
			.addCase(updateUserProfileStatusThunk.rejected, (state, action: PayloadAction<any>) => {
				state.errorMessages = [action.payload];
			});
	}
});

// ASYNCHRONOUS ACTIONS
// SET USER PROFILE
export const setUserProfileThunk = createAsyncThunk<ProfileInfoInterface, (number | string)>(
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
export const setUserProfileStatusThunk = createAsyncThunk<string, number | string>(
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
export const updateUserProfileStatusThunk = createAsyncThunk<
	string | APIResponseType,
	string,
	{ rejectValue: string }>(
	'profile/updateUserProfileStatus',
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
export const getUserProfileThunk = createAsyncThunk<ProfileInfoInterface, number | string>(
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
export const putPhotoThunk = (file: File) =>
	async (dispatch: AppDispatch) => {
		const response = await profileAPI.putPhoto(file);
		if (response.data.resultCode === 0) {
			dispatch(savePhotoSuccessAction(response.data.data.photos));
		}
	}

// PUT PROFILE PHOTO
export const putProfileInfoThunk = (data: UpdateProfileInfoInterface) =>
	async (dispatch: AppDispatch, getState: () => RootState) => {
		const authUserId = getState().auth.id;

		if (authUserId === null) {
			return;
		}

		try {
			const response = await profileAPI.putProfileInfo(data);
			if (response.status === 200) {
				if (response.data.resultCode === 0) {
					dispatch(setUserProfileThunk(authUserId));
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
	savePhotoSuccessAction,
	setSelectedTab,
} = profileSlice.actions;
export default profileSlice.reducer;