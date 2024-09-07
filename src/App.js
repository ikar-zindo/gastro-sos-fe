import React from "react";
import './App.css';
import HeaderComponent from "./compoments/fragments/header/HeaderComponent";
import FooterComponent from "./compoments/fragments/footer/FooterComponent";
import ProfileComponent from "./compoments/main/profile/ProfileComponent";
import NavbarComponent from "./compoments/fragments/navbar/NavbarComponent";
import RightComponent from "./compoments/main/right/RightComponent";
import NavigateComponent from "./compoments/fragments/navigate/NavigateComponent";
import DialogsComponent from "./compoments/main/dialogs/DialogsComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "./compoments/main/home/HomeComponent";
import ChatComponent from "./compoments/main/dialogs/chat/ChatComponent";

const App = (props) => {

	// debugger
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<HeaderComponent/>

				<NavbarComponent/>

				<div className='app-wrapper-content'>
					<Routes>
						<Route
							path='/'
							element={<HomeComponent state={props.state}
							                        store={props.store}
							                        users={props.state.users}
							                        homePage={props.state.homePage}/>}/>

						<Route
							path='/profile'
							element={<ProfileComponent state={props.state}
							                           store={props.store}
							                           dispatch={props.dispatch}/>}/>

						<Route
							path='/dialogs'
							element={<DialogsComponent state={props.state}
							                           store={props.store}
							                           users={props.state.users}
							                           dialogPage={props.state.dialogPage}/>}/>

						<Route
							path='dialogs/:id'
							element={<ChatComponent state={props.state}
							                        store={props.store}
							                        dispatch={props.dispatch}/>}/>
					</Routes>
				</div>

				<RightComponent/>

				<NavigateComponent/>

				<FooterComponent/>

			</div>
		</BrowserRouter>
	);
}

export default App;