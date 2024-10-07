import axios from "axios";
import InstanceAPI from "./instanceAPI.js";

const instance = axios.create(InstanceAPI)

export const usersAPI = {
	getUsers (currentPage = 1, pageSize = 30) {
		return instance.get(`users/?page=${currentPage}&count=${pageSize}`);
	}
}