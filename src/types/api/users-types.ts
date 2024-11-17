import {UserInterface} from "../interfaces/user-interfaces";

export interface GetUsersResponse {
	items: Array<UserInterface>;
	totalCount: number;
	error: string | null;
}