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
		watch,
		formState: {
			errors
		},
	} = useForm({
			defaultValues: {
				email: "",
				password: "",
				rememberMe: false
			}
		}
	);

	const onSubmit = (data) => {
		dispatch(login(data));
	}

	return (
		<div className={style.formLogin}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type={"email"}
				       placeholder={"Login"}
				       {...register("email", {
					       required: props.loginIsRequired,
					       pattern: {
						       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
						       message: props.invalidEmail
					       }
				       })} />
				<span className={style.error}>{errors.email?.message}{errors.pattern?.message}</span>

				<input type={"password"}
				       placeholder={"Password"}
				       {...register("password", {
					       required: props.passwordIsRequired
				       })} />
				<span className={style.error}>{errors.password?.message}</span>

				<div className={style.checkboxContainer}>
					<input type={"checkbox"}
					       {...register("rememberMe")}/>
					<p>remember me</p>
				</div>

				<div>
					<input className={style.button}
					       type="submit"
					       value="Login"/>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;