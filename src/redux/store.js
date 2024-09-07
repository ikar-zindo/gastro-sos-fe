import {combineReducers, createStore} from "redux";
import profilePostsContentReducer from "./content/profile-posts-content-reducer";
import dialogsReducer from "./content/dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import homeReducer from "./content/home-reducer";
import profileReducer from "./profile-reducer";
import searchReducer from "./search-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
	dialogPage: dialogsReducer,
	homePage: homeReducer,
	myPostContentPage: profilePostsContentReducer,
	profilePage: profileReducer,
	searchPage: searchReducer,
	users: usersReducer,
	sidebarPage: sidebarReducer
});

let store = createStore(reducers);

export default store;