import React from "react";
import ChatComponent from "./ChatComponent";
import {useAppSelector} from "../../../hooks/hooks";
import {getDialogsPage} from "../../../selectors/dialogs-selectors";
import {getUsersTest} from "../../../selectors/users-selectors";
import {getIsAuth} from "../../../selectors/auth-selectors";

const ChatContainer: React.FC = () => {
	const dialogPage = useAppSelector(getDialogsPage);
	const users = useAppSelector(getUsersTest);
	const isAuth = useAppSelector(getIsAuth);

	return <ChatComponent
		dialogPage={dialogPage}
		users={users}
		isAuth={isAuth}/>
}

export default ChatContainer;