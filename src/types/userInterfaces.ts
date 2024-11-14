import {ProfileInfoInterface} from "./profileInterfaces";

export interface UsersState {
	usersTest: Array<ProfileInfoInterface>;
	users: Array<UserInterface>;
	pageSize: number;
	totalUsers: number;
	currentPage: number;
	portionNumber: number;
	portionSize: number;
	isFetching: boolean;
	followingInProgress: (number | string)[];
}

export interface UserInterface {
	id: number | string;
	name: string;
	photos: {
		small: string;
		large: string;
	};
	uniqueUrlName: string | null;
	status: string;
	followed: boolean;
	location: {
		city: string;
		country: string;
	}
}

export interface GetUsersResponse {
	items: Array<UserInterface>;
	totalCount: number;
	error: string | null;
}