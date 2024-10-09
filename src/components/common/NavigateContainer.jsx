import React from 'react';
import style from '../../styles/common/navigate.module.css';
import {NavLink} from "react-router-dom";

const NavigateContainer = () => {
	return (
		<div className={style.navigate}>
			<NavLink
				to="/"
				className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>Home
			</NavLink>
			<NavLink
				to="/search"
				className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>Search
			</NavLink>
			<NavLink
				to="/add-photo"
				className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>Plus
			</NavLink>
			<NavLink
				to="/dialogs"
				className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>Message
			</NavLink>
			<NavLink
				to="/profile"
				className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>Ava
			</NavLink>
		</div>
	);
};

export default NavigateContainer;