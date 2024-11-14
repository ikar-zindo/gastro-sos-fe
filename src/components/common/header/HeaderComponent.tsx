import React, {MouseEvent, useEffect, useState} from "react";
import style from '../../../styles/common/header.module.css';
import {NavLink} from "react-router-dom";
// @ts-ignore
import favicon from '../../../assets/img/favicon.ico'
import {logout} from "../../../store/authSlice";
import {locate} from "../../../utils/locates/locate";
import {useAppDispatch} from "../../../hooks/hooks";
import {AuthState} from "../../../types/authInterfaces";

interface HeaderComponentProps {
	auth: AuthState;
}

const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
	const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsOpen(prev => !prev); // Используем предыдущее значение состояния
	};

	const openDropdown = () => {
		setIsOpen(true);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		(e.target as HTMLButtonElement).blur();
	}

	// Закрытие дропдауна, если кликнули вне него
	// выпавдение списка на сенсорных екранах
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (isOpen && !target.closest(`.${style.dropdown}`)) {
				setIsOpen(false);
			}
		};

		const eventListener = handleClickOutside as unknown as EventListener;
		document.addEventListener('mousedown', eventListener);
		return () => {
			document.removeEventListener('mousedown', eventListener);
		};
	}, [isOpen]);

	// Определяем, когда стрелка должна быть повернута вниз
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
								<span className={`${style.arrow} ${isOpen ? style.down : style.up}`}></span>
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