import React from 'react';
import c from '../../styles/common/footer.module.css';

const FooterComponent = () => {
	return (
		<footer className={c.footer}>
			<a className={c.a} href='#'>LinkedIn</a>
			<a className={c.a} href='#'>Facebook</a>
			<a className={c.a} href='#'>Twitter</a>
		</footer>
	);
};

export default FooterComponent;