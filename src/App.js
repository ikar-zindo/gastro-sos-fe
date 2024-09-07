import React from "react";
import './App.css';
import HeaderComponent from "./compoments/fragments/header/HeaderComponent";
import FooterComponent from "./compoments/fragments/footer/FooterComponent";
import ProfileContainer from "./compoments/main/profile/ProfileContainer";
import NavbarComponent from "./compoments/fragments/navbar/NavbarComponent";
import RightComponent from "./compoments/main/right/RightComponent";
import NavigateComponent from "./compoments/fragments/navigate/NavigateComponent";
import DialogsContainer from "./compoments/main/dialogs/DialogsContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeContainer from "./compoments/main/home/HomeContainer";
import ChatContainer from "./compoments/main/dialogs/ChatContainer";

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
							element={<HomeContainer store={props.store}/>}/>
						<Route
							path='/profile'
							element={<ProfileContainer store={props.store}/>}/>
						<Route
							path='/dialogs'
							element={<DialogsContainer store={props.store}/>}/>
						<Route
							path='dialogs/:id'
							element={<ChatContainer store={props.store}/>}/>
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