import React from "react";
import c from '../../../styles/fragments/header/Header.module.css';

const HeaderComponent = () => {
	return (
		<header className={c.header}>
			<img alt='logo' src='favicon.ico'/>
			<h1 className={c.h1}>Gastronomiczny SOS</h1>
		</header>
	);
}

export default HeaderComponent;