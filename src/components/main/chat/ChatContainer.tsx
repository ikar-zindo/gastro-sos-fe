import React from "react";
import ChatComponent from "./ChatComponent";
import {useAppSelector} from "../../../hooks/hooks";
import {getDialogsPage} from "../../../selectors/dialogsSelectors";
import {getUsersTest} from "../../../selectors/usersSelectors.ts";
import {getIsAuth} from "../../../selectors/authSelectors.ts";

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