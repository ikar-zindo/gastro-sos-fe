import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setIsFetching, setTotalUsers, setUsers} from "../../../redux/users-reducer.js";
import axios from "axios";
import UsersComponent from "./UsersComponent.jsx";

const UserFunction = (props) => {
	const dispatch = useDispatch();
	const usersPage = useSelector(state => state.usersPage)
	const users = usersPage.users1;
	const pageSize = usersPage.pageSize;
	const totalUsers = usersPage.totalUsers;
	const currentPage = usersPage.currentPage;
	const isFetching = usersPage.isFetching;

	useEffect(() => {
		if (users.length === 0) {
			dispatch(setIsFetching(true));
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					dispatch(setUsers(response.data.items));
					dispatch(setTotalUsers(response.data.totalCount));
					dispatch(setIsFetching(false));
				});
		}
	}, [users, totalUsers, currentPage]);

	let onUpdatePageClick = (pageNumber) => {
		dispatch(setIsFetching(true));
		dispatch(setCurrentPage(pageNumber));
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
			.then(response => {
				dispatch(setUsers(response.data.items));
				dispatch(setIsFetching(false))
			});
	};

	return <UsersComponent users={users}
	                       currentPage={currentPage}
	                       pageSize={pageSize}
	                       totalUsers={totalUsers}
	                       onUpdatePageClick={onUpdatePageClick}
	                       isFetching={isFetching}/>
};

export default UserFunction;