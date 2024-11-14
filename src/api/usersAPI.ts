import axios from 'axios';
import InstanceAPI from "./instanceAPI";

const instance = axios.create(InstanceAPI)

export const usersAPI = {
	getUsers (currentPage: number = 1, pageSize: number = 30) {
		return instance.get(`users/?page=${currentPage}&count=${pageSize}`);
	}
}