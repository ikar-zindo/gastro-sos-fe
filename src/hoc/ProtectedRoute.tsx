import React, {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../hooks/hooks";
import {getIsAuth} from "../selectors/auth-selectors";

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
