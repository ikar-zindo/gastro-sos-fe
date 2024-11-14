import React, {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../hooks/hooks.js";
import {getIsAuth} from "../selectors/authSelectors";

interface ProtectedRouteProps {
	element: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({element}) => {
	const isAuth = useAppSelector(getIsAuth);

	if (!isAuth) {
		return <Navigate to="/login/"/>;
	}

	return element;
};

export default ProtectedRoute;
