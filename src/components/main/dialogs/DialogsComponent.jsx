import React from 'react';
import c from '../../../styles/main/dialogs/Dialogs.module.css'
import DialogComponent from "../../common/DialogComponent.jsx";
import PreloaderComponent from "../../common/PreloaderComponent.jsx";

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
			</div>) : (<PreloaderComponent/>))
	});

	return (
		<div className={c.dialogs}>
			{dialogsElement ? dialogsElement : (<PreloaderComponent/>)}
		</div>
	);
};

export default DialogsComponent;