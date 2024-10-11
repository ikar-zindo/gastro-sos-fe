import {configureStore} from '@reduxjs/toolkit';
import profilePostsContentReducer from "./profile-posts-content-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import sidebarReducer from "./sidebar-reducer.js";
import homeReducer from "./home-reducer.js";
import profileReducer from "./profile-reducer";
import searchReducer from "./search-reducer.js";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer.js";
import appReducer from "./app-reducer.js";

const store = configureStore({
	reducer: {
		dialogPage: dialogsReducer,
		homePage: homeReducer,
		profilePage: profileReducer,
		profilePostContentPage: profilePostsContentReducer,
		searchPage: searchReducer,
		usersPage: usersReducer,
		sidebarPage: sidebarReducer,
		auth: authReducer,
		app: appReducer,
	}
});

window.store = store;

export default store;