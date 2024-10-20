import {createSlice} from "@reduxjs/toolkit";
import {getAuth} from "./auth-reducer.js";

const appReducer = createSlice({
	name: "app",
	initialState: {
		initialized: false,
		globalError: null,
	},
	reducers: {
		initializedSuccess: (state, action) => {
			return {...state, initialized: true};
		},
		setGlobalError: (state, action) => {  // Экшен для установки глобальной ошибки
			return {...state, globalError: action.payload};
		},
		clearGlobalError: (state) => {  // Экшен для очистки ошибки
			return {...state, globalError: null};
		}
	}
});

export const initializeApp = () => async (dispatch) => {
	const promise = await dispatch(getAuth());
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess());
	}).catch(error => {
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
} = appReducer.actions;

export default appReducer.reducer;