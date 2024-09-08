import React from "react";
import './App.css';
import HeaderComponent from "./compoments/fragments/header/HeaderComponent";
import FooterComponent from "./compoments/fragments/footer/FooterComponent";
import ProfileContainer from "./compoments/main/profile/ProfileContainer";
import NavbarComponent from "./compoments/fragments/navbar/NavbarComponent";
import RightComponent from "./compoments/main/right/RightComponent";
import NavigateComponent from "./compoments/fragments/navigate/NavigateComponent";
import {Route, Routes} from "react-router-dom";
import HomeContainer from "./compoments/main/home/HomeContainer";
import DialogsContainer from "./compoments/main/dialogs/DialogsContainer.jsx";
import ChatContainer from "./compoments/main/dialogs/ChatContainer.jsx";

const App = () => {
	return (
		<>
			<div className="app-wrapper">
				<HeaderComponent/>
				<NavbarComponent/>

				<div className='app-wrapper-content'>
					<Routes>
						<Route
							path='/'
							element={<HomeContainer/>}/>
						<Route
							path='/profile'
							element={<ProfileContainer/>}/>
						<Route
							path='/dialogs'
							element={<DialogsContainer/>}/>
						<Route
							path='dialogs/:id'
							element={<ChatContainer/>}/>
					</Routes>
				</div>

				<RightComponent/>
				<NavigateComponent/>
				<FooterComponent/>
			</div>
		</>
	);
}

export default App;