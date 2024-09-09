import React from "react";
import c from '../../styles/common/header.module.css';

const HeaderComponent = () => {
	return (
		<header className={c.header}>
			<img alt='logo' src='favicon.ico'/>
			<h1 className={c.h1}>Gastro SOS</h1>
		</header>
	);
}

export default HeaderComponent;