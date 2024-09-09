import React from "react";
import './App.css';
import HeaderComponent from "./components/common/HeaderComponent.jsx";
import FooterComponent from "./components/common/FooterComponent.jsx";
import ProfileContainer from "./components/main/profile/ProfileContainer";
import NavbarComponent from "./components/common/NavbarComponent.jsx";
import RightComponent from "./components/main/right/RightComponent";
import NavigateComponent from "./components/common/NavigateComponent.jsx";
import {Route, Routes} from "react-router-dom";
import HomeContainer from "./components/main/home/HomeContainer";
import DialogsContainer from "./components/main/dialogs/DialogsContainer.jsx";
import ChatContainer from "./components/main/dialogs/ChatContainer.jsx";
import SearchContainer from "./components/main/search/SearchContainer.jsx";
import PlusContainer from "./components/main/plus/PlusContainer.jsx";

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