import instanceAPI from "./instanceAPI";

export const usersAPI = {
	getUsers (currentPage: number = 1, pageSize: number = 30) {
		return instanceAPI.get(`users/?page=${currentPage}&count=${pageSize}`);
	}
}