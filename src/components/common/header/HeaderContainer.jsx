import React from 'react';
import HeaderComponent from "./HeaderComponent.jsx";
import {useSelector} from "react-redux";

const HeaderContainer = () => {
	const auth = useSelector(state => state.auth);

	return <HeaderComponent auth={auth}/>;
};

export default HeaderContainer;