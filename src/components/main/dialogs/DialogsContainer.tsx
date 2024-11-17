import React, {useEffect} from "react";
import DialogsComponent from "./DialogsComponent";
import {useAppSelector} from "../../../hooks/hooks";
import {getUsersTest} from "../../../selectors/users-selectors";
import {getDialogs} from "../../../selectors/dialogs-selectors";

const DialogsContainer: React.FC = () => {
	const dialogs = useAppSelector(getDialogs);
	const users = useAppSelector(getUsersTest);

	useEffect(() => {

	}, []);

	return <DialogsComponent
		dialogs={dialogs}
		users={users}/>
}

export default DialogsContainer;