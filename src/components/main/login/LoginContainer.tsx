import React, {useEffect} from "react";
import LoginForm from "./LoginForm";
import {useAppSelector} from "../../../hooks/hooks";
import {getAuth} from "../../../selectors/authSelectors";

const LoginContainer: React.FC = () => {
	const auth = useAppSelector(getAuth);
	const captchaUrl = auth.captchaUrl;

	useEffect(() => {
	}, [auth, auth.isAuth]);

	return <LoginForm captchaUrl={captchaUrl}/>;
};

export default LoginContainer;