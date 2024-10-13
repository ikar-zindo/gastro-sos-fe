import LoginForm from "./LoginForm.jsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const LoginContainer = () => {
	const auth = useSelector(state => state.auth);
	const captchaUrl = auth.captchaUrl;

	useEffect(() => {
	}, [auth, auth.isAuth]);

	return <LoginForm captchaUrl={captchaUrl}/>;
};

export default LoginContainer;