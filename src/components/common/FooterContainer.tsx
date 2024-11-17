import React from 'react';
import c from '../../styles/common/Footer.module.css';

const FooterContainer: React.FC = () => {
	return (
		<footer className={c.footer}>
			<a className={c.a} href='#'>LinkedIn</a>
			<a className={c.a} href='#'>Facebook</a>
			<a className={c.a} href='#'>Twitter</a>
		</footer>
	);
};

export default FooterContainer;