import React, {useEffect} from 'react';
import {FilterForm, requestUsers, setCurrentPageAction, setCurrentPortionAction} from "../../../store/users-slice";
import UsersComponent from "./UsersComponent";
import {
	getCurrentPage,
	getCurrentPortion,
	getIsFetching,
	getFollowingInProgress,
	getPageSize,
	getPortionSize,
	getTotalUsers,
	getUsers, getFilterForm
} from "../../../selectors/users-selectors";
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
	const filter = useAppSelector(getFilterForm);

	useEffect(() => {
		dispatch(requestUsers(currentPage, pageSize, filter));
	}, [currentPage, pageSize]);

	const onUpdatePageClick = (pageNumber: number) => {
		dispatch(setCurrentPageAction(pageNumber));
		dispatch(requestUsers(pageNumber, pageSize, filter));
	};


	const onUpdatePortionClick = (portionNumber: number) => {
		dispatch(setCurrentPortionAction(portionNumber));
	};

	const onFilterChange = (filter: FilterForm) => {
		dispatch(setCurrentPageAction(1));
		dispatch(setCurrentPortionAction(1));
		dispatch(requestUsers(1, pageSize, filter));
	}

	return <UsersComponent users={users}
	                       currentPage={currentPage}
	                       pageSize={pageSize}
	                       totalUsers={totalUsers}
	                       isFetching={isFetching}
	                       portionNumber={portionNumber}
	                       portionSize={portionSize}
	                       onUpdatePageClick={onUpdatePageClick}
	                       onUpdatePortionClick={onUpdatePortionClick}
	                       onFilterChange={onFilterChange}
	                       followingInProgress={followingInProgress}/>
};

export default UserContainer;