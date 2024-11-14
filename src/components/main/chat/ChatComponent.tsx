import React from 'react';
import style from '../../../styles/main/dialogs/chat.module.css'
import MessageElement from "../../common/elements/MessageElement";
import {useParams} from "react-router-dom";
import MessageTextArea from "../../common/elements/MessageTextArea";
import {sendMessage, updateMessageText} from "../../../store/dialogsSlice";
import Preloader from "../../common/elements/Preloader";
// @ts-ignore
import userPhoto from "../../../assets/img/userPhoto.png";
import {useAppDispatch} from "../../../hooks/hooks";
import {ProfileInfoInterface} from "../../../types/profileInterfaces";
import {DialogsState, MessageValueInterface} from "../../../types/dialogIntefaces";

interface ChatComponentProps {
	dialogPage: DialogsState;
	users: Array<ProfileInfoInterface>;
	isAuth: boolean;
}

const ChatComponent: React.FC<ChatComponentProps> = (props) => {
	let {userId} = useParams<{ userId: (string) }>();
	const dispatch = useAppDispatch();

	const dialogPage = props.dialogPage;
	const messageValue = dialogPage.messageValue;
	const placeholder = dialogPage.placeholder;
	const buttonValue = dialogPage.buttonValue;
	const currentDialog = dialogPage.dialogs.find(dialog => dialog.id === parseInt(userId || ''));
	const messages = currentDialog ? currentDialog.messages : [];
	const users = props.users;

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

			<MessageTextArea
				placeholder={placeholder}
				buttonValue={buttonValue}
				value={messageValue}
				handleChange={changeMessageText}
				handleClick={addNewMessage}/>
		</div>
	);
};

export default ChatComponent;