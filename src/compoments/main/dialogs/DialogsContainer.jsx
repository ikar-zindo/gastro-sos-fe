import DialogsComponent from "./DialogsComponent.jsx";
import {connect} from "react-redux";

let mapState = (state) => {
	return {
		dialogPage: state.dialogPage,
		users: state.users
	}
}

let mapDispatch = () => {
	return {

	}
}

const DialogsContainer = connect(mapState,  mapDispatch)(DialogsComponent)
export default DialogsContainer;