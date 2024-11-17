import React from 'react';
import style from "../../../styles/main/dialogs/CompanionElement.module.css";
import {NavLink} from "react-router-dom";
import Preloader from "./Preloader";
// @ts-ignore
import userPhoto from "../../../assets/img/userPhoto.png";
import {DialogInterface} from "../../../types/interfaces/dialog-interfaces";
import {ProfileInfoInterface} from "../../../types/interfaces/profile-interfaces";

interface DialogElementProps {
	user: ProfileInfoInterface;
	dialog: DialogInterface;
}

const DialogElement: React.FC<DialogElementProps> = (props) => {
	const user = props.user
	const dialog = props.dialog;
	const path = "/chat/" + dialog.id;

	if (!dialog) {
		return <Preloader/>
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