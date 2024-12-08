import React from 'react';
import ChatContainer from "../components/main/chat/ChatContainer";
import {useAppSelector} from "../hooks/hooks";
import {selectDialogsPage} from "../selectors/dialogs-selectors";
import {selectUsersTest} from "../selectors/users-selectors";

const ChatPage: React.FC = React.memo(() => {
	const dialogPage = useAppSelector(selectDialogsPage);
	const users = useAppSelector(selectUsersTest);

	return (
		<ChatContainer dialogPage={dialogPage}
		               users={users}/>
	);
});

export default ChatPage;