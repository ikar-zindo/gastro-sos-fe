import React, {useEffect} from "react";
import ChatComponent from "./ChatComponent.jsx";
import {connect} from "react-redux";
import {sendMessage, updateMessageText} from "../../../redux/content/dialogs-reducer.js";

let mapState = (state) => {
	return {
		dialogPage: state.dialogPage,
		users: state.usersPage.users
	}
}

const ChatContainer = (props) => {
	useEffect(() => {

	}, []);
	return <ChatComponent
		dialogPage={props.dialogPage}
		users={props.users}
		sendMessage={props.sendMessage}
		updateMessageText={props.updateMessageText}/>
}

export default connect(mapState,
	{sendMessage, updateMessageText})(ChatContainer);