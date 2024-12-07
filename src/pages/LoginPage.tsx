import React, {useEffect} from "react";
import LoginForm from "../components/main/login/LoginForm.tsx";
import {useAppSelector} from "../hooks/hooks.ts";
import {selectAuth} from "../selectors/auth-selectors.ts";

const LoginPage: React.FC = React.memo(() => {
	const auth = useAppSelector(selectAuth);
	const captchaUrl = auth.captchaUrl;

	useEffect(() => {
	}, [auth, auth.isAuth]);

	return <LoginForm captchaUrl={captchaUrl}/>;
});

export default LoginPage;