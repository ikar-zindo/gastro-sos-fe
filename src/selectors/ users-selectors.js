import {createSelector} from "@reduxjs/toolkit";

export const getUsers = createSelector(getUsersSelector,
	(users) => {
		return users.filter((user) => true);
	});

export const getUsersSelector = (state) => {
	return state.usersPage.users;
}

export const getPageSize = (state) => {
	return state.usersPage.pageSize;
}

export const getTotalUsers = (state) => {
	return state.usersPage.totalUsers;
}

export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
}

export const getIsFollowingInProgress = (state) => {
	return state.usersPage.isFollowingInProgress;
}

export const countSomethingDifficult = (state) => {
	let count = 0;
	return count;
}