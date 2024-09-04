import React from 'react';
import c from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={c.footer}>
			<a className={c.a} href='#'>LinkedIn</a>
			<a className={c.a} href='#'>Facebook</a>
			<a className={c.a} href='#'>Twitter</a>
		</footer>
	);
};

export default Footer;