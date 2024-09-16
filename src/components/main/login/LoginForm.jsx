import React from 'react';
import {useForm} from "react-hook-form";
import style from './login.module.css';

const LoginForm = () => {
	let loginIsRequired = "Login is required";
	let passwordIsRequired = "Password is required";

	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm({defaultValues: {
		login: "",
		password: ""
		}})

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<div className={style.formLogin}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type={"text"}
				       placeholder={"Login"}
				       {...register("login", {required: loginIsRequired, pattern:/^[A-Za-z]+$/i })} />
				<span className={style.error}>{errors.login?.message}{errors.pattern?.message}</span>

				<input type={"password"}
				       placeholder={"Password"}
				       {...register("password", {required: passwordIsRequired})} />
				<span className={style.error}>{errors.password?.message}</span>

				<div className={style.checkboxContainer}>
					<input type={"checkbox"}/>
					<p>remember me</p>
				</div>

				<div>
					<input className={style.button}
					       type="submit"
					       value={"Login"}/>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;