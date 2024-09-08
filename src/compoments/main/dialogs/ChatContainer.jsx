import ChatComponent from "./ChatComponent.jsx";
import {connect} from "react-redux";
import {sendMessageAction, updateMessageTextAction} from "../../../redux/content/dialogs-reducer.js";

// const ChatContainer = () => {
// 	return (<StoreContext.Consumer>
// 			{store => {
// 				return <ChatComponent store={store}/>
// 			}
// 			}
// 		</StoreContext.Consumer>
// 	);
// }

let mapState = (state) => {
	return {
		dialogPage: state.dialogPage,
		users: state.users
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

const ChatContainer = connect(mapState,  mapDispatch)(ChatComponent)

export default ChatContainer;