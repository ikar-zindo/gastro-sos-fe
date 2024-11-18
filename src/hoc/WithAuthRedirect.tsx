import React, {ReactNode, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {getIsAuth} from "../selectors/auth-selectors";
import {useAppSelector} from "../hooks/hooks";

interface WithAuthRedirectProps {
	children: ReactNode;
}

const WithAuthRedirect: React.FC<WithAuthRedirectProps> = ({children}) => {
	const isAuth = useAppSelector(getIsAuth);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth && location.pathname === '/login/') {
			navigate('/', { replace: true });
		}
	}, [isAuth, location, navigate]);

	if (!isAuth) {
		return children;
	}

	return null;
};

export default WithAuthRedirect;
