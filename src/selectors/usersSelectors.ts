import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export const getUsers = (state: RootState) => state.usersPage.users;

export const getUsersSelector = createSelector(getUsers,
	(users) => {
		// @ts-ignore TODO: @ts-ignore
		return users.filter((user) => true);
	});

export const getUsersTest = (state: RootState) => state.usersPage.usersTest;
export const getPageSize = (state: RootState) => state.usersPage.pageSize;
export const getTotalUsers = (state: RootState) => state.usersPage.totalUsers;
export const getCurrentPage = (state: RootState) => state.usersPage.currentPage;
export const getCurrentPortion = (state: RootState) => state.usersPage.portionNumber;
export const getIsFetching = (state: RootState) => state.usersPage.isFetching;
export const getFollowingInProgress = (state: RootState) => state.usersPage.followingInProgress;
export const getPortionSize = (state: RootState) => state.usersPage.portionSize;