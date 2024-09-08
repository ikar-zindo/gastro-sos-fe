import React from "react";
import ChatComponent from "./ChatComponent.jsx";
import {connect} from "react-redux";
import {sendMessageAction, updateMessageTextAction} from "../../../redux/content/dialogs-reducer.js";

let mapState = (state) => {
	return {
		dialogPage: state.dialogPage,
		users: state.usersPage.users
	}
}

let mapDispatch = (dispatch) => {
	return {
		sendMessage: (sendMessageData) => {
			dispatch(sendMessageAction(sendMessageData))
		},
		updateMessageText: (messageText) => {
			dispatch(updateMessageTextAction(messageText))
		}
	}
}

const ChatContainer =
	connect(mapState,  mapDispatch)(ChatComponent)

export default ChatContainer;