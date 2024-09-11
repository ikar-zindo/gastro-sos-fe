import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers, setCurrentPage} from "../../../redux/users-reducer.js";
import UsersComponent from "./UsersComponent.jsx";

const UserContainer = () => {
	const dispatch = useDispatch();
	const usersPage = useSelector(state => state.usersPage)
	const users = usersPage.users1;
	const pageSize = usersPage.pageSize;
	const totalUsers = usersPage.totalUsers;
	const currentPage = usersPage.currentPage;
	const isFetching = usersPage.isFetching;
	const isFollowingInProgress = usersPage.isFollowingInProgress;

	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize));
	}, [totalUsers, currentPage]);

	let onUpdatePageClick = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber));
		dispatch(getUsers(pageNumber, pageSize,));
	};

	return <UsersComponent users={users}
	                       currentPage={currentPage}
	                       pageSize={pageSize}
	                       totalUsers={totalUsers}
	                       onUpdatePageClick={onUpdatePageClick}
	                       isFetching={isFetching}
	                       isFollowingInProgress={isFollowingInProgress}/>
};

export default UserContainer;