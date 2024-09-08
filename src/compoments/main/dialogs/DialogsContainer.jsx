import React from "react";
import DialogsComponent from "./DialogsComponent.jsx";
import {connect} from "react-redux";

let mapState = (state) => {
	return {
		dialogPage: state.dialogPage,
		users: state.usersPage.users
	}
}

let mapDispatch = () => {
	return {

	}
}

const DialogsContainer =
	connect(mapState,  mapDispatch)(DialogsComponent)
export default DialogsContainer;