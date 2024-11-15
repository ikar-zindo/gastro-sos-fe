import instanceAPI from "./instanceAPI";
import {GetUsersResponse} from "../types/api/usersTypes";

export const usersAPI = {
	getUsers (currentPage: number = 1, pageSize: number = 30) {
		return instanceAPI.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`);
	}
}