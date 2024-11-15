import {UserInterface} from "../interfaces/userInterfaces.ts";

export interface GetUsersResponse {
	items: Array<UserInterface>;
	totalCount: number;
	error: string | null;
}