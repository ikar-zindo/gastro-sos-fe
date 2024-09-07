import React from 'react';
import c from "../../../styles/main/dialogs/Message.module.css";

const MessageComponent = (props) => {
	let currentUser = props.currentUser;
	let message = props.message;
	let isSendCurrentUser = message.senderId === currentUser.id

	const messageClass = isSendCurrentUser ? c.sentMessage : c.receivedMessage

	return (
		<div className={`${c.message} ${messageClass}`}>
			<div className={(c.messageText)}>{message.text}</div>

			<div className={c.messageInfo}>
				<div className={c.date}>{message.createdAt}</div>
				<div className={c.isRead}>{message.read ? "was read" : "no read"}</div>
			</div>
		</div>
	);
};

export default MessageComponent;