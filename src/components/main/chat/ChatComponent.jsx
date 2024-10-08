import React from 'react';
import c from '../../../styles/main/dialogs/Chat.module.css'
import MessageElement from "../../common/elements/MessageElement.jsx";
import {useParams} from "react-router-dom";
import TextAreaComponent from "../../common/TextAreaComponent.jsx";
import {useDispatch} from "react-redux";
import {sendMessage, updateMessageText} from "../../../redux/content/dialogs-reducer.js";
import Loader from "../../common/elements/Loader.jsx";

const ChatComponent = (props) => {
	let {userId} = useParams();
	const dispatch = useDispatch();
	const buttonValue = 'Send';

	let dialogPage = props.dialogPage;
	let messageValue = dialogPage.messageValue;
	let currentDialog = dialogPage.dialogs.find(dialog => dialog.id === parseInt(userId));
	let messages = currentDialog ? currentDialog.messages : [];

	let users = props.users;
	let currentUser = users.find(u => u.id === currentDialog.participants[0].userId);
	let companionUser = users.find(u => u.id === currentDialog.participants[1].userId);

	let messagesElement = messages
		.map(message => (<MessageElement
			currentUser={currentUser}
			message={message}
			key={message.id}/>));

	let changeMessageText = (messageValue) => {
		dispatch(updateMessageText(messageValue));
	}

	let addNewMessage = () => {
		let sendMessageData = {
			senderId: currentUser.id,
			receiverId: companionUser.id
		};
		dispatch(sendMessage(sendMessageData));
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
				<div className={c.messageItem}>{messagesElement ? messagesElement : (<Loader/>)}</div>
			</div>

			<TextAreaComponent
				buttonValue={buttonValue}
				value={messageValue}
				handleChange={changeMessageText}
				handleClick={addNewMessage}/>
		</div>
	);
};

export default ChatComponent;