import React from 'react';
import {useForm} from "react-hook-form";
import style from '../../../styles/main/login.module.css';
import {useDispatch} from "react-redux";
import {login} from "../../../redux/auth-reducer.js";

const LoginForm = (props) => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		trigger,
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

	const onSubmit = (data) => {
		dispatch(login(data));
	}

	return (
		<form className={style.formLogin} onSubmit={handleSubmit(onSubmit)}>
			<input className={hasEmailError ? style.error : ""}
			       type="email"
			       placeholder="Email"
			       {...register("email", {
				       required: props.emailIsRequired,
				       pattern: {
					       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
					       message: props.invalidEmail
				       },
				       maxLength: {
					       value: 30,
					       message: props.maxLength30
				       },
				       onBlur: () => trigger("email") // тригерит валидацию email
			       })}/>
			{<span className={style.errorMessage}>{errors.email?.message}</span>}

			<input className={hasPasswordError ? style.error : ""}
			       type="password"
			       placeholder="Password"
			       {...register("password", {
				       required: props.passwordIsRequired,
				       onBlur: () => trigger("password")
			       })} />
			{<span className={style.errorMessage}>{errors.password?.message}</span>}

			<label className={style.checkboxContainer}>
				<input type="checkbox"
				       {...register("rememberMe")}/>
				Remember Me
			</label>

			<div className={style.button}>
				<input type="submit"
				       value={props.buttonValue}/>
			</div>
			{props.captchaUrl && (
				<>
					<img src={props.captchaUrl} alt="CAPTCHA"/>
					<input type="captcha"
					       className={hasCaptchaError ? style.error : ""}
					       placeholder={props.captchaPlaceholder}
					       {...register("captcha", {
						       required: true,
						       onBlur: () => trigger("captcha")
					       })} />
				</>
			)}

			{props.errorMessage && <span className={style.errorMessage}>{props.errorMessage}</span>}
		</form>
	);
};

export default LoginForm;