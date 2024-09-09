import React from "react";
import NewsPostsComponent from "./NewsPostsComponent.jsx";
import {connect} from "react-redux";

let mapState = (state) => {
	return {
		homePage: state.homePage,
		users: state.usersPage.users
	}
}


export const HomePostsContainer =
	connect(mapState, {})(NewsPostsComponent)

export default HomePostsContainer;