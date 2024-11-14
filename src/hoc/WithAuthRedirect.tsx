import React, {ReactNode, useEffect} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {getIsAuth} from "../selectors/authSelectors";
import {useAppSelector} from "../hooks/hooks";

interface WithAuthRedirectProps {
	children: ReactNode;
}

const WithAuthRedirect: React.FC<WithAuthRedirectProps> = ({children}) => {
	const isAuth = useAppSelector(getIsAuth);
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
