import React, {useEffect} from "react";
import ProfilePostsComponent from "./ProfilePostsComponent.jsx";
import {connect} from "react-redux";
import {addPost, updatePostText} from "../../../../redux/content/profile-posts-content-reducer.js";

let mapState = (state) => {
	return {
		users: state.usersPage.users,
		profilePostContentPage: state.profilePostContentPage
	}
}

/*
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
*/

const ProfilePostsContainer = (props) => {
	useEffect(() => {

	}, []);

	return <ProfilePostsComponent
		addPost={props.addPost}
		updatePostText={props.updatePostText}
		users={props.users}
		profilePostContentPage={props.profilePostContentPage}/>
}

export default connect(mapState,
	{addPost, updatePostText})(ProfilePostsContainer);