import React, {useEffect, useState} from "react";
import style from '../../../styles/common/header.module.css';
import {NavLink} from "react-router-dom";
import favicon from '../../../assets/img/favicon.ico'
import {logout} from "../../../redux/auth-reducer.js";
import {useDispatch} from "react-redux";
import {locate} from "../../../utils/locates/locate.js";

const HeaderComponent = (props) => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(prev => !prev); // Используем предыдущее значение состояния
	};

	const openDropdown = () => {
		setIsOpen(true);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	const handleClick = (e) => {
		e.target.blur();
	}

	// Закрытие дропдауна, если кликнули вне него
	// выпавдение списка на сенсорных екранах
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (isOpen && !event.target.closest(`.${style.dropdown}`)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	// Определяем, когда стрелка должна быть повернута вниз
	const isArrowDown = isOpen || isHovered;

	return (
		<header className={style.header}>
			<img alt='logo' src={favicon}/>

			<h1 className={style.h1}>Gastro SOS</h1>

			<div className={style.loginWrapper}>
				{props.auth.isAuth
					? <div>
						<div className={`${style.navItem} ${style.dropdown}`}
						     onMouseEnter={openDropdown} // если убрать, то будет работать как переключатель
						     onMouseLeave={closeDropdown}>
							<button className={style.navLink}
							        role="button"
							        data-bs-toggle="dropdown"
							        aria-expanded={isOpen ? "true" : "false"}
								// aria-expanded="true"
								     onClick={(e) => {
									     toggleDropdown();
									     handleClick(e);
								     }}>
								{props.auth.login}
								<span className={`${style.arrow} ${isArrowDown ? style.down : style.up}`}></span>
							</button>
							<ul className={`${style.dropdownMenu} ${isOpen ? style.show : ''}`}>
								<li><a className={style.dropdownItem} href="#">Action</a></li>
								<li><a className={style.dropdownItem} href="#">Another action</a></li>
								<li>
									<hr className={style.dropdownDivider}></hr>
								</li>
								<li>
									<button className={style.dropdownItem}
									        onClick={() => dispatch(logout())}>
										{locate.auth.buttonLogoutValue}
									</button>
								</li>
							</ul>
						</div>
					</div>
					: <div className={`${style.navItem} ${style.dropdown}`}>
						<NavLink to={'/login'}>
							<button onClick={handleClick}>{locate.auth.buttonLoginValue}</button>
						</NavLink>
					</div>
				}
			</div>
		</header>
	);
}

export default HeaderComponent;