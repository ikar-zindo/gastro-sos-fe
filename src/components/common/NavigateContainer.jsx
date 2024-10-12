import React from 'react';
import style from '../../styles/common/navigate.module.css';
import {NavLink} from "react-router-dom";
import home from "../../assets/img/icons/nav/home.svg";
import homeActive from "../../assets/img/icons/nav/home-active.svg";
import search from "../../assets/img/icons/nav/search.svg";
import searchActive from "../../assets/img/icons/nav/search-active.svg";
import plus from "../../assets/img/icons/nav/plus.svg";
import plusActive from "../../assets/img/icons/nav/plus-active.svg";
import chats from "../../assets/img/icons/nav/chats.svg";
import chatsActive from "../../assets/img/icons/nav/chats-active.svg";
import profile from "../../assets/img/icons/nav/profile.svg";
import profileActive from "../../assets/img/icons/nav/profile-active.svg";
import NavigateElement from "./elements/NavigateElement.jsx";

const NavigateContainer = () => {
	return (
		<div className={style.navigate}>
			<NavigateElement
				path="/"
				activeIcon={homeActive}
				inactiveIcon={home}
				altText="Home"
			/>
			<NavigateElement
				path="/search"
				activeIcon={searchActive}
				inactiveIcon={search}
				altText="Search"
			/>
			<NavigateElement
				path="/add-photo"
				activeIcon={plusActive}
				inactiveIcon={plus}
				altText="Plus"
			/>
			<NavigateElement
				path="/dialogs"
				activeIcon={chatsActive}
				inactiveIcon={chats}
				altText="Messages"
			/>
			<NavigateElement
				path="/profile"
				activeIcon={profileActive}
				inactiveIcon={profile}
				altText="Profile"
			/>
		</div>
	);
};

export default NavigateContainer;