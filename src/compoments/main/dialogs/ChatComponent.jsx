import React from 'react';
import c from '../../../styles/main/dialogs/Chat.module.css'
import MessageComponent from "./MessageComponent";
import {useParams} from "react-router-dom";
import TextAreaComponent from "../../fragments/post/TextAreaComponent.jsx";

const ChatComponent = (props) => {
	let {id} = useParams();

	let dialogPage = props.dialogPage;
	let messageValue = dialogPage.messageValue;
	let currentDialog = dialogPage.dialogs.find(dialog => dialog.id === parseInt(id));
	let messages = currentDialog ? currentDialog.messages : [];

	let users = props.users;
	let currentUser = users.find(u => u.id === currentDialog.participants[0].userId);
	let companionUser = users.find(u => u.id === currentDialog.participants[1].userId);

	// debugger
	let messagesElement = messages
		.map(message => (<MessageComponent
			currentUser={currentUser}
			message={message}
			key={message.id}/>));

	let onSendMessageClick = () => {
		let sendMessageData = {
			senderId: currentUser.id,
			receiverId: companionUser.id
		};
		props.sendMessage(sendMessageData);
	}

	let handleChange = (messageValue) => {
		props.updateMessageText(messageValue);
	}

	return (
		<div className={c.chat}>
			<div className={c.userInfo}>
				<img alt='ava' src={companionUser.ava}/>

				<div className={c.userInfoWrapper}>
					<p className={c.userName}>{companionUser.name}</p>
					<p className={c.date}>5 minutes ego</p>
				</div>
			</div>

			<div className={c.messages}>
				<div className={c.messageItem}>{messagesElement ? messagesElement : (<div>Loading...</div>)}</div>
			</div>

			<TextAreaComponent
				buttonValue='Send'
				value={messageValue}
				changePostText={handleChange}
				addNewPost={onSendMessageClick}/>
		</div>
	);
};

export default ChatComponent;