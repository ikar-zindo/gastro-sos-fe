import React from "react";
import StoriesComponent from "./StoriesComponent.jsx";
import {connect} from "react-redux";

let mapState = (state) => {
	return {
		homePage: state.homePage,
		users: state.usersPage.users
	}
}

let mapDispatch = () => {
	return {

	}
}

export const StoriesContainer =
	connect(mapState,  mapDispatch)(StoriesComponent)

export default StoriesContainer;