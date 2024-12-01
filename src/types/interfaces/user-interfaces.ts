import {ProfileInfoInterface} from "./profile-interfaces";

export interface UsersState {
	usersTest: Array<ProfileInfoInterface>;
	users: Array<UserInterface>;
	pageSize: number;
	totalUsers: number;
	currentPage: number;
	currentPortion: number;
	portionSize: number;
	isFetching: boolean;
	followingInProgress: (number | string)[];
	filter: {
		term: string;
		friend: boolean | null;
	}
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
		city?: string;
		country: string;
	} | null;
}