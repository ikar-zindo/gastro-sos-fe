import React, {useEffect, useRef, useState} from 'react';
import MessageTextarea from "../components/common/elements/MessageTextarea";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {MessageValueInterface} from "../types/interfaces/dialog-interfaces";
import {sendMessage, updateMessageText} from "../store/dialogs-slice";
import {selectDialogsPage} from "../selectors/dialogs-selectors";
import {selectUsersTest} from "../selectors/users-selectors";
import style from "../styles/main/GroupChat.module.css";
import {ChatMessageAPIType} from "../types/interfaces/chat-interfaces";
import {sendMessagesThunk, startMessagesListeningThunk, stopMessagesListeningThunk} from "../store/chat-slice";
import {selectChatMessages} from "../selectors/chat-selectors";

const ChatPageWS: React.FC = React.memo(() => {
	return (
		<div className={style.groupChat}>
			<Chat/>
		</div>
	);
});

const Chat: React.FC = () => {
	const dialogPage = useAppSelector(selectDialogsPage);
	const users = useAppSelector(selectUsersTest);
	let {userId} = useParams<{ userId: string }>();
	const dispatch = useAppDispatch();

	const messageValue = dialogPage.messageValue;
	const placeholder = dialogPage.placeholder;
	const currentDialog = dialogPage.dialogs.find(dialog => dialog.id === parseInt(userId || '0'));

	const currentUser = users.find(user => user.userId === currentDialog?.participants[0].userId);
	const companionUser = users.find(user => user.userId === currentDialog?.participants[1].userId);

	useEffect(() => {
		dispatch(startMessagesListeningThunk());

		return () => {
			dispatch(stopMessagesListeningThunk());
		}
	}, []);

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
			dispatch(sendMessagesThunk(messageValue.text)); // TODO: для WebSocket
		}
	};

	return (
		<>
			<Messages/>

			<MessageTextarea
				placeholder={placeholder}
				value={messageValue}
				handleChange={changeMessageText}
				handleClick={addNewMessage}/>
		</>
	);
};

const Messages: React.FC = () => {
	const messages = useAppSelector(selectChatMessages)
	const messagesAnchorRef = useRef<HTMLDivElement>(null);
	const [isAutoScroll, setIsAutoScroll] = useState(true);

	const scrollHandler = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
		let element = event.currentTarget;
		if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 100) {
			!isAutoScroll && setIsAutoScroll(true)
		} else {
			isAutoScroll && setIsAutoScroll(false);
		}
	}

	useEffect(() => {
		if (isAutoScroll) {
			messagesAnchorRef.current?.scrollIntoView({behavior: "smooth"});
		}
	}, [messages]);

	return (
		<div className={style.groupChatMessages} onScroll={scrollHandler}>
			{messages.map((message) => (
				<Message message={message}
				         key={message.id}/>))}
			<div ref={messagesAnchorRef}></div>
		</div>
	);
};

const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
	return <div>
		<img src={message.photo} style={{width: '30px'}} alt="photo"/>
		<br/>
		{message.message}
		<hr/>
	</div>
});

export default ChatPageWS;