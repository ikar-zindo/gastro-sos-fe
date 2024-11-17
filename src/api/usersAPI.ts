import instanceAPI from "./instanceAPI";
import {GetUsersResponse} from "../types/api/users-types";
import {FilterForm} from "../store/users-slice.ts";

export const usersAPI = {
	async getUsers(currentPage: number = 1, pageSize: number = 30, filter: FilterForm) {
		const response = await instanceAPI
			.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}` +
				(filter.term === '' ? '' : `&term=${filter.term}`) +
				(filter.friend === null ? '' : `&friend=${filter.friend}`));
		if (response.status === 200 && response.data) {
			return response.data;
		}
	}
}