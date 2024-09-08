import React from "react";
import HomePostsComponent from "./HomePostsComponent.jsx";
import {connect} from "react-redux";

let mapState = (state) => {
	return {
		homePage: state.homePage,
		users: state.users
	}
}

let mapDispatch = () => {
	return {

	}
}

export const HomePostsContainer = connect(mapState,  mapDispatch)(HomePostsComponent)

export default HomePostsContainer;