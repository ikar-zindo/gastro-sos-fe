import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({element}) => {
	const isAuth = useSelector(state => state.auth.isAuth);

	if (!isAuth) {
		return <Navigate to="/login"/>;
	}

	return element;
};

export default ProtectedRoute;
