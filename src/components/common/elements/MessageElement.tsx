import React from 'react';
import style from "../../../styles/main/dialogs/Message.module.css";
import {MessageInterface} from "../../../types/interfaces/dialog-interfaces";
import {ProfileInfoInterface} from "../../../types/interfaces/profile-interfaces";

interface MessageElementProps {
	message: MessageInterface;
	currentUser?: ProfileInfoInterface;
}

const MessageElement: React.FC<MessageElementProps> = (props) => {
	const currentUser = props.currentUser;
	const message = props.message;
	const isSendCurrentUser = message.senderId === currentUser?.userId

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