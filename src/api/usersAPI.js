import axios from "axios";
import instanceAPI from "./instanceAPI.js";

const instance = axios.create(instanceAPI)

export const usersAPI = {
	getUsers (currentPage = 1, pageSize = 30) {
		return instance.get(`users/?page=${currentPage}&count=${pageSize}`);
	}
}