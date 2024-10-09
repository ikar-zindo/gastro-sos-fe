import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom';

const WithAuthRedirect = ({children}) => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const location = useLocation();

	useEffect(() => {

	}, [isAuth]);

	if (isAuth) {
		if (location.pathname === '/login/') {
			return <Navigate to="/profile/"/>;
		}
		return children;
	}

	return children;
};

export default WithAuthRedirect;
