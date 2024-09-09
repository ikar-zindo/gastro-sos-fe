import React, {useEffect} from "react";
import DialogsComponent from "./DialogsComponent.jsx";
import {connect} from "react-redux";

let mapState = (state) => {
	return {
		dialogPage: state.dialogPage,
		users: state.usersPage.users
	}
}


const DialogsContainer = (props) => {

	useEffect(() => {
	}, []);


	return <DialogsComponent
		dialogPage={props.dialogPage}
		users={props.users}/>

}



export default connect(mapState,  {})
(DialogsContainer);