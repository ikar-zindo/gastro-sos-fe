import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogs = [
		{id: 1, name: "Ikar"},
		{id: 2, name: "Bartek"},
		{id: 3, name: "Maria"},
		{id: 4, name: "Santa"},
		{id: 5, name: "Hatari"},
		{id: 6, name: "Iyeshua"},
		{id: 7, name: "Luk"}
	];

	let messages = [
		{id: 1, message: "Hi!"},
		{id: 2, message: "Hello world"},
		{id: 3, message: "How are you?"},
		{id: 4, message: "Yo"}
	];

	let dialogsElement = dialogs
		.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

	let messagesElement = messages
		.map( message => <Message message={message.message}/>)

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