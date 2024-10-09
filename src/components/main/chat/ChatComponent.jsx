import React from 'react';
import style from '../../../styles/main/dialogs/chat.module.css'
import MessageElement from "../../common/elements/MessageElement.jsx";
import {useParams} from "react-router-dom";
import TextArea from "../../common/TextArea.jsx";
import {useDispatch} from "react-redux";
import {sendMessage, updateMessageText} from "../../../redux/content/dialogs-reducer.js";
import Loader from "../../common/elements/Loader.jsx";
import userPhoto from "../../../assets/img/userPhoto.png";

const ChatComponent = (props) => {
	let {userId} = useParams();
	const dispatch = useDispatch();

	let dialogPage = props.dialogPage;
	let messageValue = dialogPage.messageValue;
	let placeholder = dialogPage.placeholder;
	let buttonValue = dialogPage.buttonValue;
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
		<div className={style.chat}>
			<div className={style.userInfoWrapper}>
				<img alt='ava' src={companionUser.photos.small != null ? companionUser.photos.small : userPhoto}/>

				<div className={style.userInfo}>
					<p className={style.userName}>{companionUser.name}</p>
					<p className={style.date}>5 minutes ego</p>
				</div>
			</div>

			<div className={style.messages}>
				<div className={style.messageItem}>{messagesElement ? messagesElement : (<Loader/>)}</div>
			</div>

			<TextArea
				placeholder={placeholder}
				buttonValue={buttonValue}
				value={messageValue}
				handleChange={changeMessageText}
				handleClick={addNewMessage}/>
		</div>
	);
};

export default ChatComponent;