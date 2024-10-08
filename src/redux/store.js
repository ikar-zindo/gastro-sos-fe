import {configureStore} from '@reduxjs/toolkit';
import profilePostsContentReducer from "./content/profile-posts-content-reducer.js";
import dialogsReducer from "./content/dialogs-reducer";
import sidebarReducer from "./sidebar-reducer.js";
import homeReducer from "./content/home-reducer.js";
import profileReducer from "./profile-reducer";
import searchReducer from "./search-reducer.js";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer.js";

const store = configureStore({
	reducer: {
		dialogPage: dialogsReducer,
		homePage: homeReducer,
		profilePage: profileReducer,
		profilePostContentPage: profilePostsContentReducer,
		searchPage: searchReducer,
		usersPage: usersReducer,
		sidebarPage: sidebarReducer,
		auth: authReducer
	}
});

window.store = store;

export default store;