import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export const selectUsers = (state: RootState) => state.usersPage.users;

export const getUsersSelector = createSelector(selectUsers,
	(users) => {
		// @ts-ignore TODO: @ts-ignore
		return users.filter((user) => true);
	});

export const selectUsersTest = (state: RootState) => state.usersPage.usersTest;
export const selectPageSize = (state: RootState) => state.usersPage.pageSize;
export const selectTotalUsers = (state: RootState) => state.usersPage.totalUsers;
export const selectCurrentPage = (state: RootState) => state.usersPage.currentPage;
export const selectCurrentPortion = (state: RootState) => state.usersPage.currentPortion;
export const selectIsFetching = (state: RootState) => state.usersPage.isFetching;
export const selectFollowingInProgress = (state: RootState) => state.usersPage.followingInProgress;
export const selectPortionSize = (state: RootState) => state.usersPage.portionSize;
export const selectFilterForm = (state: RootState) => state.usersPage.filter;