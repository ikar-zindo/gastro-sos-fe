import React from 'react';
import c from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

	let path = "/dialogs/" + props.id;
	let user = props.user

	return (
		<div>
			<div className={c.dialog + ' ' + c.active}>
				<NavLink to={path}>
					<div className={c.userInfo}>
						<img alt='ava' src={user.ava}/>

						<div className={c.userInfoWrapper}>
							<p className={c.userName}>{user.name}</p>
							<p className={c.date}>5 minutes ego</p>
						</div>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default DialogItem;