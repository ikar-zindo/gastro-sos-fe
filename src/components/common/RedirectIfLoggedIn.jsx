import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PreloaderElement from "./elements/PreloaderElement.jsx";

const RedirectIfLoggedIn = ({ children }) => {
	const isAuth = useSelector(state => state.auth.isAuth);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth) {
			navigate('/profile');
		} else {
			setLoading(false);
		}
	}, [isAuth, navigate]);

	if (loading) {
		return <PreloaderElement/>;
	}

	return children;
};

export default RedirectIfLoggedIn;
