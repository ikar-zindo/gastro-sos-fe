import React from 'react';
import c from '../../../styles/main/dialogs/Chat.module.css'
import MessageComponent from "./MessageComponent";
import {sendMessageAction, updateMessageTextAction} from "../../../redux/content/dialogs-reducer";
import {useParams} from "react-router-dom";

const ChatContainer = (props) => {
	let {id} = useParams();

	let dialogPage = props.store.getState().dialogPage;
	let currentDialog = dialogPage.dialogs.find(dialog => dialog.id === parseInt(id));
	let messages = currentDialog ? currentDialog.messages : [];

	let users = props.store.getState().users;
	let currentUser = users.find(u => u.id === currentDialog.participants[0].userId);
	let companionUser = users.find(u => u.id === currentDialog.participants[1].userId);

	let messagesElement = messages
		.map(message => (<MessageComponent
			currentUser={currentUser}
			message={message}
			key={message.id}/>));

	let messagesText = dialogPage.messageText;

	let onSendMessageClick = (event) => {
		event.preventDefault();
		let sendMessageData = {
			senderId: currentUser.id,
			receiverId: companionUser.id
		};
		props.store.dispatch(sendMessageAction(sendMessageData))
	}

	let handleChange = (event) => {
		let messageText = event.target.value;
		props.store.dispatch(updateMessageTextAction(messageText));
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

			<form className={c.messageArea}>
				<div>
					<input
						type="text"
						placeholder='Enter Comment'
						name='comment'
						value={messagesText}
						className='form-control'
						onChange={handleChange}>
					</input>
				</div>

				<button onClick={onSendMessageClick}>Send</button>
			</form>
		</div>
	);
};

export default ChatContainer;