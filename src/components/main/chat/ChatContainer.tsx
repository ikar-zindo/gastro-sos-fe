import React from "react";
import ChatComponent from "./ChatComponent";
import {useAppSelector} from "../../../hooks/hooks";
import {getDialogsPage} from "../../../selectors/dialogsSelectors";

const ChatContainer: React.FC = () => {
	const dialogPage = useAppSelector(getDialogsPage);
	const users = useAppSelector(state => state.usersPage.usersTest);
	const isAuth = useAppSelector(state => state.auth.isAuth);

	return <ChatComponent
		dialogPage={dialogPage}
		users={users}
		isAuth={isAuth}/>
}

export default ChatContainer;