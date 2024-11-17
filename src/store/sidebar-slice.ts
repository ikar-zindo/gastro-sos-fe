import {createSlice} from "@reduxjs/toolkit";

export interface SidebarState {}

const initialState: SidebarState = {}

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {},
});

export const {

} = sidebarSlice.actions;
export default sidebarSlice.reducer;