import React from "react";
import './App.css';
import HeaderComponent from "./compoments/fragments/HeaderComponent.jsx";
import FooterComponent from "./compoments/fragments/FooterComponent.jsx";
import ProfileContainer from "./compoments/main/profile/ProfileContainer";
import NavbarComponent from "./compoments/fragments/NavbarComponent.jsx";
import RightComponent from "./compoments/main/right/RightComponent";
import NavigateComponent from "./compoments/fragments/NavigateComponent.jsx";
import {Route, Routes} from "react-router-dom";
import HomeContainer from "./compoments/main/home/HomeContainer";
import DialogsContainer from "./compoments/main/dialogs/DialogsContainer.jsx";
import ChatContainer from "./compoments/main/dialogs/ChatContainer.jsx";
import SearchContainer from "./compoments/main/search/SearchContainer.jsx";
import PlusContainer from "./compoments/main/plus/PlusContainer.jsx";

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
							path='/dialogs/:id'
							element={<ChatContainer/>}/>
						<Route
							path='/search'
							element={<SearchContainer/>}/>
						<Route
							path='/add-photo'
							element={<PlusContainer/>}/>
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