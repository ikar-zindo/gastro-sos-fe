import {configureStore} from '@reduxjs/toolkit';
import homeSlice from "./home-slice";
import profilePostsSlice from "./profile-posts-slice";
import profileSlice from "./profile-slice";
import dialogsSlice from "./dialogs-slice";
import sidebarSlice from "./sidebar-slice";
import searchSlice from "./search-slice";
import usersSlice from "./users-slice";
import authSlice from "./auth-slice";
import appSlice from "./app-slice";
import chatSlice from "./chat-slice";

const store = configureStore({
	reducer: {
		homePage: homeSlice,
		profilePosts: profilePostsSlice,
		profilePage: profileSlice,
		dialogPage: dialogsSlice,
		chatPage: chatSlice,
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