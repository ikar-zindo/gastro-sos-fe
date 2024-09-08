import React from 'react';
import c from '../../../styles/main/dialogs/Dialogs.module.css'
import DialogComponent from "./DialogComponent";

const DialogsComponent = (props) => {
	let dialogPage = props.dialogPage;
	let users = props.users;

	let dialogsElement = dialogPage.dialogs.map(dialog => {
		let user = users.find(user => user.id === dialog.participants[1].userId);

		return (dialog ?
			(<div>
				<DialogComponent
					key={dialog.id}
					user={user}
					dialog={dialog}/>
			</div>) : (<div className='loading'>Loading...</div>))
	});

	return (
		<div className={c.dialogs}>
			{dialogsElement ? dialogsElement : (<div>Loading...</div>)}
		</div>
	);
};

export default DialogsComponent;