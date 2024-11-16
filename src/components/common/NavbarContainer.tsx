import React from "react";
import style from "../../styles/common/navbar.module.css";
import {NavLink} from "react-router-dom";

const NavbarContainer: React.FC = () => {
	return (
		<nav className={style.nav}>
			<div className={`${style.item} ${style.activeLink}`}>
				<NavLink
					to="/profile"
					className={({isActive}) => isActive ? `${style.activeLink}` : undefined}
				>Profile</NavLink>
			</div>

			<div className={style.item}>
				<NavLink
					to="/dialogs"
					className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>
					Messages</NavLink>
			</div>

			<div className={style.item}>
				<NavLink
					to="/"
					className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>
					News</NavLink>
			</div>

			<div className={style.item}>
				<NavLink
					to="/search"
					className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>
					Search</NavLink>
			</div>

			<div className={style.item}>
				<NavLink
					to="/music"
					className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>
					Music</NavLink>
			</div>

			<div className={style.item}>
				<NavLink
					to="/settings"
					className={({isActive}) => isActive ? `${style.activeLink}` : undefined}>
					Settings</NavLink>
			</div>
			<button className={style.button}><h1>settings</h1></button>
		</nav>
	);
};

export default NavbarContainer;