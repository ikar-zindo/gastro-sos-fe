import {createSlice} from "@reduxjs/toolkit";

interface SidebarState {}

const initialState: SidebarState = {}

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {},
});

export const {

} = sidebarSlice.actions;
export default sidebarSlice.reducer;