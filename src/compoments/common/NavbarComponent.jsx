import React from 'react';
import c from '../../styles/fragments/navbar.module.css';
import {NavLink} from "react-router-dom";

const NavbarComponent = () => {
	return (
		<nav className={c.nav}>
			<div className={`${c.item} ${c.activeLink}`}>
				<NavLink
					to="/profile"
					className={({isActive}) => isActive ? `${c.activeLink}` : undefined}
				>
					Profile</NavLink>
			</div>
			<div className={c.item}>
				<NavLink
					to="/dialogs"
					className={({isActive}) => isActive ? `${c.activeLink}` : undefined}
				>
					Messages
				</NavLink>
			</div>
			<div className={c.item}>
				<NavLink
					to="/"
					className={({isActive}) => isActive ? `${c.activeLink}` : undefined}
				>
					News
				</NavLink>
			</div>
			<div className={c.item}>
				<NavLink
					to="/music"
					className={({isActive}) => isActive ? `${c.activeLink}` : undefined}
				>
					Music
				</NavLink>
			</div>
			<div className={c.item}>
				<NavLink
					to="/settings"
					className={({isActive}) => isActive ? `${c.activeLink}` : undefined}
				>
					Settings
				</NavLink>
			</div>
			<button className='button'><h1>settings</h1></button>
		</nav>
	);
};

export default NavbarComponent;