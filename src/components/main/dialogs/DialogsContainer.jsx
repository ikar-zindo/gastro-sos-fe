import React, {useEffect} from "react";
import DialogsComponent from "./DialogsComponent.jsx";
import {useSelector} from "react-redux";

const DialogsContainer = () => {
	const dialogPage = useSelector(state => state.dialogPage);
	const users = useSelector(state => state.usersPage.users);
	const isAuth = useSelector(state => state.auth.isAuth);

	useEffect(() => {

	}, []);

	return <DialogsComponent
		dialogPage={dialogPage}
		users={users}
		isAuth={isAuth}/>
}

export default DialogsContainer;