import React from 'react';
import {NavLink} from "react-router-dom";
import style from '../../../styles/common/Navigate.module.css';

interface NavigateElementProps {
	path: string;
	activeIcon: string;
	inactiveIcon: string;
	altText: string;
}

const NavigateElement: React.FC<NavigateElementProps> = ({path, activeIcon, inactiveIcon, altText}) => {
	return (
		<NavLink
			to={path}
			className={({isActive}) => isActive ? `${style.activeLink}` : ''}
		>{({isActive}) => (
			<img
				src={isActive ? activeIcon : inactiveIcon}
				alt={altText}
				className={isActive ? style.activeImage : style.inactiveImage}
			/>
		)}
		</NavLink>
	);
};

export default NavigateElement;
