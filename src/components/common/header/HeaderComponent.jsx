import React from "react";
import style from '../../../styles/common/header.module.css';
import {NavLink} from "react-router-dom";
import favicon from '../../../assets/img/favicon.ico'

const HeaderComponent = (props) => {
	return (
		<header className={style.header}>
			<img alt='logo' src={favicon}/>

			<h1 className={style.h1}>Gastro SOS</h1>

			<div className={style.loginBock}>
				{props.auth.isAuth ? props.auth.login:
				<NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}

export default HeaderComponent;