import React from "react";
import c from './Header.module.css';

const Header = () => {
	return (
		<header className={c.header}>
			<img alt='logo' src='favicon.ico'/>
			<h1 className={c.h1}>Gastronomiczny SOS</h1>
		</header>
	);
}

export default Header;