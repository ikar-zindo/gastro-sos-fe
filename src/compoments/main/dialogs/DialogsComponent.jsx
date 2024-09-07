import React from 'react';
import c from './Dialogs.module.css'
import DialogElement from "./dialog/DialogElement";

const DialogsComponent = (props) => {
	let dialogPage = props.store.getState().dialogPage;
	let users = props.store.getState().users;

	let dialogsElement = dialogPage.dialogs.map(dialog => {
		let user = users.find(user => user.id === dialog.participants[1].userId);

		return (dialog ?
			(<div>
				<DialogElement
					user={user}
					dialog={dialog}/>
			</div>)
			: (<div className='loading'>
				Loading...
			</div>))
	});

	return (
		<div className={c.dialogs}>
			{dialogsElement ? dialogsElement : (<div>Loading...</div>)}
		</div>
	);
};

export default DialogsComponent;