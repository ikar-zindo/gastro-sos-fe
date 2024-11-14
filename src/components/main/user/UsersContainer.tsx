import React, {useEffect} from 'react';
import {requestUsers, setCurrentPageAction, setCurrentPortionAction} from "../../../store/usersSlice";
import UsersComponent from "./UsersComponent";
import {
	getCurrentPage,
	getCurrentPortion,
	getIsFetching,
	getFollowingInProgress,
	getPageSize,
	getPortionSize,
	getTotalUsers,
	getUsers
} from "../../../selectors/usersSelectors";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

const UserContainer: React.FC = () => {
	const dispatch = useAppDispatch();
	const users = useAppSelector(getUsers);
	const pageSize = useAppSelector(getPageSize);
	const totalUsers = useAppSelector(getTotalUsers);
	const currentPage = useAppSelector(getCurrentPage);
	const portionNumber = useAppSelector(getCurrentPortion);
	const isFetching = useAppSelector(getIsFetching);
	const followingInProgress = useAppSelector(getFollowingInProgress);
	const portionSize = useAppSelector(getPortionSize);

	useEffect(() => {
		dispatch(requestUsers(currentPage, pageSize));
	}, [totalUsers, currentPage, pageSize]);

	let onUpdatePageClick = (pageNumber: number) => {
		dispatch(setCurrentPageAction(pageNumber));
		dispatch(requestUsers(pageNumber, pageSize));
	};

	let onUpdatePortionClick = (portionNumber: number) => {
		dispatch(setCurrentPortionAction(portionNumber));
	};

	return <UsersComponent users={users}
	                       currentPage={currentPage}
	                       pageSize={pageSize}
	                       totalUsers={totalUsers}
	                       onUpdatePageClick={onUpdatePageClick}
	                       isFetching={isFetching}
	                       onUpdatePortionClick={onUpdatePortionClick}
	                       portionNumber={portionNumber}
	                       portionSize={portionSize}
	                       followingInProgress={followingInProgress}/>
};

export default UserContainer;