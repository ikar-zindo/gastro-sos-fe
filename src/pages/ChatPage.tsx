import React from 'react';
import style from '../styles/main/dialogs/Chat.module.css'
import MessageElement from "../components/common/elements/MessageElement";
import {useParams} from "react-router-dom";
import MessageTextarea from "../components/common/elements/MessageTextarea";
import {sendMessage, updateMessageText} from "../store/dialogs-slice";
import Preloader from "../components/common/elements/Preloader";
// @ts-ignore
import userPhoto from "../assets/img/userPhoto.png";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {MessageValueInterface} from "../types/interfaces/dialog-interfaces";
import {selectDialogsPage} from "../selectors/dialogs-selectors";
import {selectUsersTest} from "../selectors/users-selectors";

const ChatPage: React.FC = React.memo(() => {
	let {userId} = useParams<{ userId: (string) }>();
	const dialogPage = useAppSelector(selectDialogsPage);
	const users = useAppSelector(selectUsersTest);
	const dispatch = useAppDispatch();

	const messageValue = dialogPage.messageValue;
	const placeholder = dialogPage.placeholder;
	const buttonValue = dialogPage.buttonValue;
	const currentDialog = dialogPage.dialogs.find(dialog => dialog.id === parseInt(userId || ''));
	const messages = currentDialog ? currentDialog.messages : [];

	const currentUser = users.find(user => user.userId === currentDialog?.participants[0].userId);
	const companionUser = users.find(user => user.userId === currentDialog?.participants[1].userId);

	let messagesElement = messages
		.map(message => (<MessageElement
			currentUser={currentUser}
			message={message}
			key={message.id}/>));

	let changeMessageText = (messageValue: MessageValueInterface) => {
		dispatch(updateMessageText(messageValue));
	}

	let addNewMessage = () => {
		if (currentUser && companionUser) {
			const sendMessageData = {
				senderId: currentUser.userId,
				receiverId: companionUser.userId
			};
			dispatch(sendMessage(sendMessageData));
		}
	};

	return (
		<div className={style.chat}>
			<div className={style.userInfoWrapper}>
				<img alt='ava' src={companionUser?.photos.small != null ? companionUser?.photos.small : userPhoto}/>

				<div className={style.userInfo}>
					<p className={style.userName}>{companionUser?.fullName}</p>
					<p className={style.date}>5 minutes ego</p>
				</div>
			</div>

			<div className={style.messages}>
				<div className={style.messageItem}>{messagesElement ? messagesElement : (<Preloader/>)}</div>
			</div>

			<MessageTextarea
				placeholder={placeholder}
				buttonValue={buttonValue}
				value={messageValue}
				handleChange={changeMessageText}
				handleClick={addNewMessage}/>
		</div>
	);
});

export default ChatPage;