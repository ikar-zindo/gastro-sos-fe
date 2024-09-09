import React from 'react';
import {connect} from "react-redux";
import {
	followAction,
	setCurrentPageAction,
	setTotalUsersAction,
	setUsersAction,
	unfollowAction
} from "../../../redux/users-reducer.js";
import UserComponent from "./UserCOmponent.jsx";
import UserFunction from "./UserFunction.jsx";
import UserClass from "./UserClass.jsx";


let mapState = (state) => {
	return {
		users: state.usersPage.users1,
		pageSize: state.usersPage.pageSize,
		totalUsers: state.usersPage.totalUsers,
		currentPage: state.usersPage.currentPage
	}
}

let mapDispatch = (dispatch) => {
	return {
		follow: (userId) => {dispatch(followAction(userId))},
		unfollow: (userId) => {dispatch(unfollowAction(userId))},
		setUsers: (users) => {dispatch(setUsersAction(users))},
		setCurrentPage: (currentPage) => {dispatch(setCurrentPageAction(currentPage))},
		setTotalUsers: (totalUsers) => {dispatch(setTotalUsersAction(totalUsers))}
	}
}

// export default connect(mapState,  mapDispatch)(UserComponent);
export default connect(mapState,  mapDispatch)(UserClass);