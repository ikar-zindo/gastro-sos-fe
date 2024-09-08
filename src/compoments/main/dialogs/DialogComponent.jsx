import React from 'react';
import c from "../../../styles/main/dialogs/CompanionElement.module.css";
import {NavLink} from "react-router-dom";

const DialogComponent = (props) => {
	let user = props.user
	let dialog = props.dialog;
	let path = "/dialogs/" + dialog.id;

	return (
		<div>
			<div className={c.dialog + ' ' + c.active}>
				<NavLink to={path}>
					<div className={c.userInfo}>
						<img alt='ava' src={user.imgUrl}/>

						<div className={c.userInfoWrapper}>
							<p className={c.userName}>{user.name}</p>
							<p className={c.date}>5 minutes ego</p>
						</div>

						<div className={c.dialogMark}>{dialog.id}</div>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default DialogComponent;