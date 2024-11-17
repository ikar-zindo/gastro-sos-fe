import React from 'react';
import c from '../../../styles/main/dialogs/Dialogs.module.css'
import DialogElement from "../../common/elements/DialogElement";
import {ProfileInfoInterface} from "../../../types/interfaces/profile-interfaces";
import {DialogInterface} from "../../../types/interfaces/dialog-interfaces";

interface DialogsComponentProps {
	dialogs: Array<DialogInterface>;
	users: Array<ProfileInfoInterface>;
}

const  DialogsComponent: React.FC<DialogsComponentProps> = (props) => {
	const dialogs = props.dialogs;
	const users = props.users;

	let dialogsElement = dialogs.map(dialog => {
		let user = users.find(user => user.userId === dialog.participants[1].userId);

		if (!user) {
			return null;
		}

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