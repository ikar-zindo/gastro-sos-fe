import React from 'react';
import style from '../../styles/common/navigate.module.css';
// @ts-ignore
import home from "../../assets/img/icons/nav/home.svg";
// @ts-ignore
import homeActive from "../../assets/img/icons/nav/home-active.svg";
// @ts-ignore
import search from "../../assets/img/icons/nav/search.svg";
// @ts-ignore
import searchActive from "../../assets/img/icons/nav/search-active.svg";
// @ts-ignore
import plus from "../../assets/img/icons/nav/plus.svg";
// @ts-ignore
import plusActive from "../../assets/img/icons/nav/plus-active.svg";
// @ts-ignore
import chats from "../../assets/img/icons/nav/chats.svg";
// @ts-ignore
import chatsActive from "../../assets/img/icons/nav/chats-active.svg";
// @ts-ignore
import profile from "../../assets/img/icons/nav/profile.svg";
// @ts-ignore
import profileActive from "../../assets/img/icons/nav/profile-active.svg";
import NavigateElement from "./elements/NavigateElement";

const NavigateContainer: React.FC = () => {
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