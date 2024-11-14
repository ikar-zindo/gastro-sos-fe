import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAuth} from "./authSlice";
import {AppDispatch} from "./store";
import {AppState, GlobalError} from "../types/appInteefaces";

const initialState: AppState = {
	initialized: false,
	globalError: null,
}

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		initializedSuccess: (state) => {
			return {...state, initialized: true};
		},
		setGlobalError: (state, action: PayloadAction<GlobalError>) => {  // Экшен для установки глобальной ошибки
			return {...state, globalError: action.payload};
		},
		clearGlobalError: (state) => {  // Экшен для очистки ошибки
			return {...state, globalError: null};
		}
	}
});

// ASYNCHRONOUS ACTIONS
export const initializeApp = () => async (dispatch: AppDispatch) => {
	const promise = await dispatch(getAuth());
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	}).catch((error: any) => {
			dispatch(setGlobalError({
				code: error.code || 'UNKNOWN_CODE',
				message: error.message || 'Unknown error occurred',
				status: error.status || 999,
			}))
		}
	)
};

export const {
	initializedSuccess,
	setGlobalError,
	clearGlobalError,
} = appSlice.actions;
export default appSlice.reducer;