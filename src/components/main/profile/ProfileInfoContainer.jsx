import React from "react";
import ProfileInfoComponent from "./ProfileInfoComponent.jsx";
import {connect} from "react-redux";

let mapState = (state) => {
	return {
		users: state.users,
		myPostContentPage: state.myPostContentPage
	}
}

let mapDispatch = (dispatch) => {
	return {
	}
}

export const ProfileInfoContainer =
	connect(mapState,  mapDispatch)(ProfileInfoComponent);

export default ProfileInfoContainer;