import {createSlice} from "@reduxjs/toolkit";

export interface SearchState {}

const initialState: SearchState = {}

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {}
});

export const {

} = searchSlice.actions;
export default searchSlice.reducer;