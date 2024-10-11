import LoginForm from "./LoginForm.jsx";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {globalErrorMessages} from "../../../utils/global-error-messages.js";
import {locate} from "../../../utils/locates/locate.js";

const LoginContainer = () => {
	const loginIsRequired = globalErrorMessages.LOGIN_IS_REQUIRED;
	const passwordIsRequired = globalErrorMessages.PASSWORD_IS_REQUIRED;
	const emailIsRequired = globalErrorMessages.EMAIL_IS_REQUIRED;
	const invalidEmail = globalErrorMessages.INVALID_EMAIL;
	const maxLength30 = globalErrorMessages.MAX_LENGTH_30;
	const auth = useSelector(state => state.auth);
	const buttonLoginValue = locate.login.buttonLoginValue;
	const buttonLogoutValue = locate.login.buttonLogoutValue;
	const captchaUrl = auth.captchaUrl;
	const captchaPlaceholder = locate.login.captchaPlaceholder;

	useEffect(() => {
	}, [auth, auth.isAuth]);

	return <LoginForm loginIsRequired={loginIsRequired}
	                  passwordIsRequired={passwordIsRequired}
	                  invalidEmail={invalidEmail}
	                  emailIsRequired={emailIsRequired}
	                  buttonValue={buttonLoginValue}
	                  buttonLogoutValue={buttonLogoutValue}
	                  maxLength30={maxLength30}
	                  captchaUrl={captchaUrl}
	                  captchaPlaceholder={captchaPlaceholder}
	/>;
};

export default LoginContainer;