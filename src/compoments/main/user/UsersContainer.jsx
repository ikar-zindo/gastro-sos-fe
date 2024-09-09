import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {
	followAction,
	setCurrentPageAction,
	setTotalUsersAction,
	setUsersAction,
	unfollowAction
} from "../../../redux/users-reducer.js";
import UserComponent from "./UserCOmponent.jsx";
import axios from "axios";
import Users from "./Users.jsx";

class UserClass extends React.Component {
	componentDidMount() {
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
		axios.get(
			'https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setTotalUsers(response.data.totalCount);
			});
	}


	onUpdatePageClick = (page) => {
		this.props.setCurrentPage(page);
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return <>
			{this.props.isFetching ? <img src="" alt="loading"/> : null}
			<Users users={this.props.users}
			       currentPage={this.props.currentPage}
			       pageSize={this.props.pageSize}
			       totalUsers={this.props.totalUsers}
			       setUsers={this.props.setUsers}
			       setCurrentPage={this.props.setCurrentPage}
			       onUpdatePageClick={this.onUpdatePageClick}
			       follow={this.props.follow}
			       unfollow={this.props.unfollow}/>;
		</>
	}
}

const UserFunction = (props) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					props.setUsers(response.data.items);
				});
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					props.setTotalUsers(response.data.totalCount);
				});
		}
	}, [props.users, props.totalUsers, props.currentPage]);

	let onUpdatePageClick = (page) => {
		props.setCurrentPage(page);
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.pageSize}`)
			.then(response => {
				props.setUsers(response.data.items);
			});
	};

	let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return <Users users={this.props.users}
	              currentPage={this.props.currentPage}
	              pageSize={this.props.pageSize}
	              totalUsers={this.props.totalUsers}
	              setUsers={this.props.setUsers}
	              setCurrentPage={this.props.setCurrentPage}
	              onUpdatePageClick={this.onUpdatePageClick}
	              follow={this.props.follow}
	              unfollow={this.props.unfollow}/>;
};

let mapState = (state) => {
	return {
		users: state.usersPage.users1,
		pageSize: state.usersPage.pageSize,
		totalUsers: state.usersPage.totalUsers,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

let mapDispatch = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAction(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAction(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAction(users))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAction(currentPage))
		},
		setTotalUsers: (totalUsers) => {
			dispatch(setTotalUsersAction(totalUsers))
		}
	}
}

// export default connect(mapState,  mapDispatch)(UserComponent);
export default connect(mapState, mapDispatch)(UserClass);