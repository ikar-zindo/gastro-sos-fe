import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


	let dialogsElement = props.dialogs.dialogs.map(dialog => {
		let user = props.users.find(user => user.id === dialog.userId);

		return (
			<DialogItem user={user} dialog={dialog} name={dialog.name} id={dialog.id}/>
		)
	});

	let messagesElement = props.dialogs.messages
		.map(message => <Message message={message.message}/>)

	return (
		<div className={c.dialogs}>
			<div className={c.dialogsItems}>
				{dialogsElement}
			</div>

			<div className={c.messages}>
				{messagesElement}
			</div>
		</div>
	);
};

export default Dialogs;