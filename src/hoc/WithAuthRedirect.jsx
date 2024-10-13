import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom';
import {getIsAuth} from "../selectors/auth-selectors.js";

const WithAuthRedirect = ({children}) => {
	const isAuth = useSelector(getIsAuth);
	const location = useLocation();

	useEffect(() => {

	}, [isAuth]);

	if (isAuth) {
		if (location.pathname === '/login/') {
			return <Navigate to="/"/>;
		}
		return children;
	}

	return children;
};

export default WithAuthRedirect;
