import React from "react";
import ProfilePostsComponent from "./ProfilePostsComponent.jsx";
import {connect} from "react-redux";
import {addPostAction, updatePostTextAction} from "../../../redux/content/profile-posts-content-reducer.js";

let mapState = (state) => {
	return {
		users: state.users,
		myPostContentPage: state.myPostContentPage
	}
}

let mapDispatch = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostAction())
		},
		updatePostText: (postValue) => {
			dispatch(updatePostTextAction(postValue))
		}
	}
}

export const ProfilePostsContainer =
	connect(mapState,  mapDispatch)(ProfilePostsComponent)


export default ProfilePostsContainer;