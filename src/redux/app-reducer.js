import {createSlice} from "@reduxjs/toolkit";
import {getAuth} from "./auth-reducer.js";

const appReducer = createSlice({
	name: "app",
	initialState: {
		initialized: false,
	},
	reducers: {
		initializedSuccess: (state, action) => {
			state.initialized = true;
		}
	}
});

export const initializeApp = () => async (dispatch) => {
	const promise = await dispatch(getAuth());
	Promise.all([promise]).then(() => {
			dispatch(initializedSuccess());
		})
};

export const {
	initializedSuccess,
} = appReducer.actions;

export default appReducer.reducer;