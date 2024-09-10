import axios from "axios";
import API from "./API.js";

const instance = axios.create(API)

export const UsersAPI = {
	getUsers (currentPage = 1, pageSize = 30) {
		return instance.get(`users/?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	}
}