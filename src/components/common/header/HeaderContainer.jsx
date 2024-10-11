import React, {useEffect} from 'react';
import HeaderComponent from "./HeaderComponent.jsx";
import {useSelector} from "react-redux";
import {locate} from "../../../utils/locates/locate.js";

const HeaderContainer = () => {
	const auth = useSelector(state => state.auth);
	const buttonLoginValue = locate.login.buttonLoginValue;
	const buttonLogoutValue = locate.login.buttonLogoutValue;

	return <HeaderComponent auth={auth}
	                        buttonLoginValue={buttonLoginValue}
	                        buttonLogoutValue={buttonLogoutValue}/>;
};

export default HeaderContainer;