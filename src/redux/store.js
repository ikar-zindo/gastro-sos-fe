import {combineReducers, createStore} from "redux";
import profilePostsContentReducer from "./content/profile-posts-content-reducer";
import dialogsReducer from "./content/dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import homeReducer from "./content/home-reducer";
import profileReducer from "./profile-reducer";
import searchReducer from "./search-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer.js";

let reducers = combineReducers({
	dialogPage: dialogsReducer,
	homePage: homeReducer,
	profilePage: profileReducer,
	profilePostContentPage: profilePostsContentReducer,
	searchPage: searchReducer,
	usersPage: usersReducer,
	sidebarPage: sidebarReducer,
	auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;