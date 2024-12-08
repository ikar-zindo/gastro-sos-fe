import React from 'react';
import style from '../../../styles/main/dialogs/Chat.module.css'
import MessageElement from "../../common/elements/MessageElement";
import {useParams} from "react-router-dom";
import MessageTextarea from "../../common/elements/MessageTextarea";
import {sendMessage, updateMessageText} from "../../../store/dialogs-slice";
import Preloader from "../../common/elements/Preloader";
// @ts-ignore
import userPhoto from "../../../assets/img/userPhoto.png";
import {useAppDispatch} from "../../../hooks/hooks";
import {DialogsState, MessageValueInterface} from "../../../types/interfaces/dialog-interfaces";
import {ProfileInfoInterface} from "../../../types/interfaces/profile-interfaces";

interface ChatContainerProps {
	dialogPage: DialogsState;
	users: Array<ProfileInfoInterface>;
}

const ChatContainer: React.FC<ChatContainerProps> = (props) => {
	const dialogPage = props.dialogPage;
	const users = props.users;
	let {userId} = useParams<{ userId: (string) }>();
	const dispatch = useAppDispatch();

	const messageValue = dialogPage.messageValue;
	const placeholder = dialogPage.placeholder;
	const currentDialog = dialogPage.dialogs.find(dialog => dialog.id === parseInt(userId || ''));
	const messages = currentDialog ? currentDialog.messages : [];

	const currentUser = users.find(user => user.userId === currentDialog?.participants[0].userId);
	const companionUser = users.find(user => user.userId === currentDialog?.participants[1].userId);

	let messagesElement = messages
		.map(message => (<MessageElement
			currentUser={currentUser}
			message={message}
			key={message.id}/>));

	const changeMessageText = (messageValue: MessageValueInterface) => {
		dispatch(updateMessageText(messageValue));
	}

	const addNewMessage = () => {
		if (!messageValue.text) {
			return;
		}

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
				value={messageValue}
				handleChange={changeMessageText}
				handleClick={addNewMessage}/>
		</div>
	);
};

export default ChatContainer;