import React from "react";
import ChatComponent from "./ChatComponent.jsx";
import {useSelector} from "react-redux";

const ChatContainer = () => {
	const dialogPage = useSelector(state => state.dialogPage);
	const users = useSelector(state => state.usersPage.users);
	const isAuth = useSelector(state => state.auth.isAuth);

	return <ChatComponent
		dialogPage={dialogPage}
		users={users}
		isAuth={isAuth}/>
}

export default ChatContainer;