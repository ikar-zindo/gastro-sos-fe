import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setIsFetching, setTotalUsers, setUsers} from "../../../redux/users-reducer.js";
import UsersComponent from "./UsersComponent.jsx";
import {UsersAPI} from "../../../api/UsersAPI.js";

const UserContainer = () => {
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
			UsersAPI.getUsers(currentPage, pageSize).then(data => {
				dispatch(setUsers(data.items));
				dispatch(setTotalUsers(data.totalCount));
				dispatch(setIsFetching(false));
			});
		}
	}, [users, totalUsers, currentPage]);

	let onUpdatePageClick = (pageNumber) => {
		dispatch(setIsFetching(true));
		dispatch(setCurrentPage(pageNumber));
		UsersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(setUsers(data.items));
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

export default UserContainer;