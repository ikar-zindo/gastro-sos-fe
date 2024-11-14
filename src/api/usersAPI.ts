import InstanceAPI from "./instanceAPI";

export const usersAPI = {
	getUsers (currentPage: number = 1, pageSize: number = 30) {
		return InstanceAPI.get(`users/?page=${currentPage}&count=${pageSize}`);
	}
}