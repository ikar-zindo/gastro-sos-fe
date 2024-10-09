import LoginForm from "./LoginForm.jsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const LoginContainer = () => {
	const loginIsRequired = "Login is required";
	const passwordIsRequired = "Password is required";
	const emailIsRequired = "Email is required";
	const invalidEmail = "This is not a valid email";
	const maxLength30 = "Max length is 30";
	const auth = useSelector(state => state.auth);
	const buttonValue = auth.buttonValue;
	const captchaUrl = auth.captchaUrl;
	const errorMessage = auth.errorMessage;
	const captchaPlaceholder = auth.captchaPlaceholder;

	useEffect(() => {
	}, [auth]);

	return <LoginForm loginIsRequired={loginIsRequired}
	                  passwordIsRequired={passwordIsRequired}
	                  invalidEmail={invalidEmail}
	                  emailIsRequired={emailIsRequired}
	                  buttonValue={buttonValue}
	                  maxLength30={maxLength30}
	                  captchaUrl={captchaUrl}
	                  errorMessage={errorMessage}
	                  captchaPlaceholder={captchaPlaceholder}
	/>;
};

export default LoginContainer;