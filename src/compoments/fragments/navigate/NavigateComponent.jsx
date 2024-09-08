import React from 'react';
import c from '../../../styles/fragments/navigate/Navigate.module.css';
import {NavLink} from "react-router-dom";

const NavigateComponent = () => {
	return (
		<div className={c.navigate}>
			<NavLink
				to="/"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Home
			</NavLink>
			<NavLink
				to="/search"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Search
			</NavLink>
			<NavLink
				to="/add-photo"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Plus
			</NavLink>
			<NavLink
				to="/dialogs"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Message
			</NavLink>
			<NavLink
				to="/profile"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Ava
			</NavLink>
		</div>
	);
};

export default NavigateComponent;