import React from 'react';
import style from '../../styles/common/Navigate.module.css';
// @ts-ignore
import home from "../../assets/img/icons/nav/home.svg";
// @ts-ignore
import homeActive from "../../assets/img/icons/nav/home-active.svg";
// @ts-ignore
import groupChat from "../../assets/img/icons/nav/group-chat.svg";
// @ts-ignore
import groupChatActive from "../../assets/img/icons/nav/group-chat-active.svg";
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
				activeIcon={homeActive as string}
				inactiveIcon={home as string}
				altText="Home"
			/>
			<NavigateElement
				path="/group-chat"
				activeIcon={groupChatActive as string}
				inactiveIcon={groupChat as string}
				altText="Group Chat"
			/>
			<NavigateElement
				path="/search"
				activeIcon={searchActive as string}
				inactiveIcon={search as string}
				altText="Search"
			/>
			{/*<NavigateElement*/}
			{/*	path="/add-photo"*/}
			{/*	activeIcon={plusActive}*/}
			{/*	inactiveIcon={plus}*/}
			{/*	altText="Plus"*/}
			{/*/>*/}
			<NavigateElement
				path="/dialogs"
				activeIcon={chatsActive as string}
				inactiveIcon={chats as string}
				altText="Messages"
			/>
			<NavigateElement
				path="/profile"
				activeIcon={profileActive as string}
				inactiveIcon={profile as string}
				altText="Profile"
			/>
		</div>
	);
};

export default NavigateContainer;