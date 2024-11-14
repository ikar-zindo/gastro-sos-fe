import {configureStore} from '@reduxjs/toolkit';
import homeSlice from "./homeSlice";
import profilePostsSlice from "./profilePostsSlice";
import profileSlice from "./profileSlice";
import dialogsSlice from "./dialogsSlice";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import usersSlice from "./usersSlice";
import authSlice from "./authSlice";
import appSlice from "./appSlice";

const store = configureStore({
	reducer: {
		homePage: homeSlice,
		profilePostContentPage: profilePostsSlice,
		profilePage: profileSlice,
		dialogPage: dialogsSlice,
		sidebarPage: sidebarSlice,
		searchPage: searchSlice,
		usersPage: usersSlice,
		auth: authSlice,
		app: appSlice,
	}
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store;

// @ts-ignore
window.store = store;
export default store;