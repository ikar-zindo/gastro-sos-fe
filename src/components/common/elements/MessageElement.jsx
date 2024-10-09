import React from 'react';
import style from "../../../styles/main/dialogs/message.module.css";

const MessageElement = (props) => {
	let currentUser = props.currentUser;
	let message = props.message;
	let isSendCurrentUser = message.senderId === currentUser.id

	const messageClass = isSendCurrentUser ? style.sentMessage : style.receivedMessage

	return (
		<div className={`${style.message} ${messageClass}`}>
			<div className={(style.messageText)}>{message.text}</div>

			<div className={style.messageInfo}>
				<div className={style.date}>{message.createdAt}</div>
				<div className={style.isRead}>{message.read ? "was read" : "no read"}</div>
			</div>
		</div>
	);
};

export default MessageElement;