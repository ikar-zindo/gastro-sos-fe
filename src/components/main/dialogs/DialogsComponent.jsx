import React from 'react';
import c from '../../../styles/main/dialogs/Dialogs.module.css'
import DialogElement from "../../common/elements/DialogElement.jsx";

const  DialogsComponent = (props) => {
	let dialogPage = props.dialogPage;
	let users = props.users;

	let dialogsElement = dialogPage.dialogs.map(dialog => {
		let user = users.find(user => user.id === dialog.participants[1].userId);

		return <DialogElement
			key={dialog.id}
			user={user}
			dialog={dialog}/>
	});

	return (
		<div className={c.dialogs}>
			{dialogsElement}
		</div>
	);
};

export default DialogsComponent;