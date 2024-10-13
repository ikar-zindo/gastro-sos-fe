import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import style from '../../../styles/main/login.module.css';
import {useDispatch} from "react-redux";
import {login} from "../../../redux/auth-reducer.js";
import {locate} from "../../../utils/locates/locate.js";
import {globalErrorMessages} from "../../../utils/global-error-messages.js";

const LoginForm = ({captchaUrl}) => {
	const dispatch = useDispatch();
	const [errorMessages, setErrorMessages] = useState([]);
	const {
		register,
		handleSubmit,
		trigger,
		setError,
		formState: {
			errors,
			touchedFields
		},
	} = useForm({
			mode: "onChange",
			defaultValues: {
				email: "",
				password: "",
				rememberMe: false,
				captcha: ''
			}
		}
	);

	const hasEmailError = errors.email && touchedFields.email;
	const hasPasswordError = errors.password && touchedFields.password;
	const hasCaptchaError = errors.captcha && touchedFields.captcha;

	const onSubmit = async (data) => {
		setErrorMessages(await dispatch(login(data)));
	}

	return (
		<form className={style.formLogin} onSubmit={handleSubmit(onSubmit)}>
			<input className={hasEmailError ? style.error : ""}
			       type="email"
			       placeholder="Email"
			       {...register("email", {
				       required: globalErrorMessages.EMAIL_IS_REQUIRED,
				       pattern: {
					       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
					       message: globalErrorMessages.INVALID_EMAIL
				       },
				       maxLength: {
					       value: 30,
					       message: globalErrorMessages.MAX_LENGTH_30
				       },
				       onBlur: () => trigger("email") // тригерит валидацию email
			       })}/>
			{<span className={style.errorMessage}>{errors.email?.message}</span>}

			<input className={hasPasswordError ? style.error : ""}
			       type="password"
			       placeholder="Password"
			       {...register("password", {
				       required: globalErrorMessages.PASSWORD_IS_REQUIRED,
				       onBlur: () => trigger("password")
			       })} />
			{<span className={style.errorMessage}>{errors.password?.message}</span>}

			<label className={style.checkboxContainer}>
				<input type="checkbox"
				       {...register("rememberMe")}/>
				Remember Me
			</label>

			{captchaUrl && (
				<>
					<img src={captchaUrl} alt="CAPTCHA"/>
					<input type="captcha"
					       className={hasCaptchaError ? style.error : ""}
					       placeholder={locate.auth.captchaPlaceholder}
					       {...register("captcha", {
						       required: true,
						       onBlur: () => trigger("captcha")
					       })} />
				</>
			)}

			{errorMessages && <span className={style.errorMessage}>{errorMessages}</span>}

			<div className={style.button}>
				<input type="submit"
				       value={locate.auth.buttonLoginValue}/>
			</div>
		</form>
	);
};

export default LoginForm;