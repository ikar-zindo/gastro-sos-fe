import React from 'react';
import c from './Navigate.module.css';
import {NavLink} from "react-router-dom";

const Navigate = () => {
	return (
		<div className={c.navigate}>
			<NavLink
				to="/home"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Home
			</NavLink>
			<NavLink
				to="/search"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Search
			</NavLink>
			<NavLink
				to="/ad-foto"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Plus
			</NavLink>
			<NavLink
				to="/dialogs"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Bell
			</NavLink>
			<NavLink
				to="/profile"
				className={({isActive}) => isActive ? `${c.activeLink}` : undefined}>Ava
			</NavLink>
		</div>
	);
};

export default Navigate;