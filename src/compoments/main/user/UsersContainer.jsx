import React from 'react';
import {connect} from "react-redux";
import {followAction, setUsersAction, unfollowAction} from "../../../redux/users-reducer.js";
import UserComponent from "./UserCOmponent.jsx";
import UserFunction from "./UserFunction.jsx";
import UserClass from "./UserClass.jsx";


let mapState = (state) => {
	return {
		users: state.usersPage.users1
	}
}

let mapDispatch = (dispatch) => {
	return {
		follow: (userId) => {dispatch(followAction(userId))},
		unfollow: (userId) => {dispatch(unfollowAction(userId))},
		setUsers: (users) => {dispatch(setUsersAction(users))}
	}
}

// export default connect(mapState,  mapDispatch)(UserComponent);
export default connect(mapState,  mapDispatch)(UserComponent);