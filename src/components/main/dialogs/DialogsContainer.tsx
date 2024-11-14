import React, {useEffect} from "react";
import DialogsComponent from "./DialogsComponent";
import {useAppSelector} from "../../../hooks/hooks";
import {getUsersTest} from "../../../selectors/usersSelectors";
import {getDialogs} from "../../../selectors/dialogsSelectors";

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