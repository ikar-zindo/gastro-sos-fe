import React, {useEffect} from 'react';
import HeaderComponent from "./HeaderComponent.jsx";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setAuthData} from "../../../redux/auth-reducer.js";

const HeaderContainer = () => {
	const auth = useSelector(state => state.auth)
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
			withCredentials: true,
			headers: {
				"API-KEY": "86e8673b-3a2b-481e-b044-2c856bb6173b",
				"Authorization": "Bearer b0f07a0b-d84c-45ca-9c3c-eeed68339a04"
			}
		}).then(response => {
			if (response.data.resultCode === 0) {
				let {id, login, email} = response.data.data
				dispatch(setAuthData(id, login, email));
			}
		}).catch(error => {
			console.error('Ошибка при запросе:', error);
		});
	}, []);

	return <HeaderComponent auth={auth}/>;
};

export default HeaderContainer;