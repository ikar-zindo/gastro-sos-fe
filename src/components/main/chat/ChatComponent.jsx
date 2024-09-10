import React from 'react';
import c from '../../../styles/main/dialogs/Chat.module.css'
import MessageElement from "../../common/elements/MessageElement.jsx";
import {useParams} from "react-router-dom";
import TextAreaComponent from "../../common/TextAreaComponent.jsx";
import {useDispatch} from "react-redux";
import {sendMessage, updateMessageText} from "../../../redux/content/dialogs-reducer.js";

const ChatComponent = (props) => {
	let {userId} = useParams();
	const dispatch = useDispatch();


	let dialogPage = props.dialogPage;
	let messageValue = dialogPage.messageValue;
	let currentDialog = dialogPage.dialogs.find(dialog => dialog.id === parseInt(userId));
	let messages = currentDialog ? currentDialog.messages : [];

	let users = props.users;
	let currentUser = users.find(u => u.id === currentDialog.participants[0].userId);
	let companionUser = users.find(u => u.id === currentDialog.participants[1].userId);

	// debugger
	let messagesElement = messages
		.map(message => (<MessageElement
			currentUser={currentUser}
			message={message}
			key={message.id}/>));

	let onSendMessageClick = () => {
		let sendMessageData = {
			senderId: currentUser.id,
			receiverId: companionUser.id
		};
		dispatch(sendMessage(sendMessageData));
	}

	let handleChange = (messageValue) => {
		dispatch(updateMessageText(messageValue));
	}

	return (
		<div className={c.chat}>
			<div className={c.userInfoWrapper}>
				<img alt='ava' src={companionUser.imgUrl}/>

				<div className={c.userInfo}>
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