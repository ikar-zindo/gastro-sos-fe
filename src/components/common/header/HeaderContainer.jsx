import React, {useEffect} from 'react';
import HeaderComponent from "./HeaderComponent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAuth} from "../../../redux/auth-reducer.js";

const HeaderContainer = () => {
	const auth = useSelector(state => state.auth)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAuth());
	}, []);

	return <HeaderComponent auth={auth}/>;
};

export default HeaderContainer;