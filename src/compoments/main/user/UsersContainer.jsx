import React from 'react';
import UserComponent from "./UserComponent.jsx";
import {connect} from "react-redux";
import {followAction, setUsersAction, unfollowAction} from "../../../redux/users-reducer.js";


let mapState = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatch = (dispatch) => {
	return {
		follow: (userId) => {dispatch(followAction(userId))},
		unfollow: (userId) => {dispatch(unfollowAction(userId))},
		setUsers: (users) => {dispatch(setUsersAction(users))}
	}
}


export default connect(mapState,  mapDispatch)(UserComponent);