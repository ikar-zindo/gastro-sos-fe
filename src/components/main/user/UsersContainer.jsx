import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {requestUsers, setCurrentPageAction} from "../../../redux/users-reducer.js";
import UsersComponent from "./UsersComponent.jsx";
import {
	getCurrentPage,
	getIsFetching,
	getIsFollowingInProgress,
	getPageSize,
	getTotalUsers,
	getUsers
} from "../../../selectors/ users-selectors.js";

const UserContainer = () => {
	const dispatch = useDispatch();

	const users = useSelector(getUsers);
	const pageSize = useSelector(getPageSize);
	const totalUsers = useSelector(getTotalUsers);
	const currentPage = useSelector(getCurrentPage);
	const isFetching = useSelector(getIsFetching);
	const isFollowingInProgress = useSelector(getIsFollowingInProgress);

	useEffect(() => {
		dispatch(requestUsers(currentPage, pageSize));
	}, [totalUsers, currentPage]);

	let onUpdatePageClick = (pageNumber) => {
		dispatch(setCurrentPageAction(pageNumber));
		dispatch(requestUsers(pageNumber, pageSize,));
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