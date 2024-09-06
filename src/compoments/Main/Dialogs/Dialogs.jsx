import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAction, updateMessageTextAction} from "../../../redux/state";

const Dialogs = (props) => {
	let state = props.store.getState().dialogPage;
	// let state = '';

	let dialogsElement = state.dialogs.map(dialog => {
		let user = props.users.find(user => user.id === dialog.ownerId);

		return (
			<DialogItem user={user} dialog={dialog} name={dialog.name} id={dialog.id}/>
		)
	});

	let messagesElement = state.messages
		.map(message => <Message content={message.content}/>);

	let messagesText = state.messageText;

	let onSendMessageClick = (event) => {
		event.preventDefault();
		let sendMessageData = {
			senderId: 1,
			receiverId: 0
		};
		props.store.dispatch(sendMessageAction(sendMessageData))
	}

	let onMessageTextChange = (event) => {
		let messageText = event.target.value;
		props.store.dispatch(updateMessageTextAction(messageText));
	}

	return (
		<div className={c.dialogs}>
			<div className={c.dialogsItems}>
				{dialogsElement ? dialogsElement : (<div>Loading...</div>)}
			</div>

			<div className={c.messages}>

				<div>{messagesElement ? messagesElement : (<div>Loading...</div>)}</div>

				<div>
					{/*<div><textarea name="" id="" cols="30" rows="10"></textarea></div>*/}
					<div></div>

					<div className={c.messageArea}>
						<form>
							<div>
								<input
									type="text"
									placeholder='Enter Comment'
									name='comment'
									value={messagesText}
									className='form-control'
									onChange={onMessageTextChange}
								>
								</input>
							</div>
							<button onClick={onSendMessageClick}>Send
							</button>
						</form>
					</div>
				</div>


			</div>


		</div>
	);
};

export default Dialogs;