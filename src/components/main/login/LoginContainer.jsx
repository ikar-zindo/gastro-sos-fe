import LoginForm from "./LoginForm.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const LoginContainer = () => {
	const loginIsRequired = "Login is required";
	const passwordIsRequired = "Password is required";
	const invalidEmail = "Invalid email address";
	const auth = useSelector(state => state.auth);

	useEffect(() => {
	}, [auth]);

	return <LoginForm loginIsRequired={loginIsRequired}
	                  passwordIsRequired={passwordIsRequired}
	                  invalidEmail={invalidEmail}
	/>;
};

export default LoginContainer;