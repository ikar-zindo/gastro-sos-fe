import axios from "axios";
import InstanceAPI from "./InstanceAPI.js";

const instance = axios.create(InstanceAPI)

export const UsersAPI = {
	getUsers (currentPage = 1, pageSize = 30) {
		return instance.get(`users/?page=${currentPage}&count=${pageSize}`);
	}
}