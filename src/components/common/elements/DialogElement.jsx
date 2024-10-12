import React from 'react';
import style from "../../../styles/main/dialogs/companionElement.module.css";
import {NavLink} from "react-router-dom";
import Loader from "./Loader.jsx";
import userPhoto from "../../../assets/img/userPhoto.png";

const DialogElement = (props) => {
	let user = props.user
	let dialog = props.dialog;
	let path = "/chat/" + dialog.id;

	if (!dialog) {
		return <Loader/>
	}

	return (
		<div>
			<div className={style.dialog + ' ' + style.active}>
				<NavLink to={path}>
					<div className={style.userInfoWrapper}>
						<img alt='ava' src={user.photos.small != null ? user.photos.small : userPhoto}/>

						<div className={style.userInfo}>
							<p className={style.userName}>{user.fullName}</p>
							<p className={style.date}>5 minutes ego</p>
						</div>

						<div className={style.dialogMark}>{dialog.id}</div>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default DialogElement;