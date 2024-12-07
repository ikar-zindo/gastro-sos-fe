import React from 'react';
import c from '../styles/main/dialogs/Dialogs.module.css'
import DialogElement from "../components/common/elements/DialogElement.tsx";
import {useAppSelector} from "../hooks/hooks.ts";
import {selectDialogs} from "../selectors/dialogs-selectors";
import {selectUsersTest} from "../selectors/users-selectors";

const  DialogsPage: React.FC = React.memo(() => {
	const dialogs = useAppSelector(selectDialogs);
	const users = useAppSelector(selectUsersTest);

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
});

export default DialogsPage;