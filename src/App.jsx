import React from "react";
import './App.css';
import FooterComponent from "./components/common/elements/FooterComponent.jsx";
import ProfileContainer from "./components/main/profile/ProfileContainer";
import NavbarComponent from "./components/common/NavbarComponent";
import RightComponent from "./components/main/right/RightComponent";
import NavigateComponent from "./components/common/NavigateComponent";
import {Route, Routes} from "react-router-dom";
import HomeContainer from "./components/main/home/HomeContainer";
import DialogsContainer from "./components/main/dialogs/DialogsContainer";
import ChatContainer from "./components/main/chat/ChatContainer";
import SearchContainer from "./components/main/search/SearchContainer";
import PlusContainer from "./components/main/plus/PlusContainer";
import HeaderContainer from "./components/common/header/HeaderContainer.jsx";
import LoginContainer from "./components/main/login/LoginContainer.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import RedirectIfLoggedIn from "./components/common/RedirectIfLoggedIn.jsx";

const App = () => {
	return (
		<>
			<div className="app-wrapper">
				<HeaderContainer/>
				<NavbarComponent/>

				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/' element={<HomeContainer/>}/>
						<Route path='/login/' element={
							<RedirectIfLoggedIn>
								<LoginContainer/>
							</RedirectIfLoggedIn>}/>
						<Route path='/profile/*' element={<ProtectedRoute element={<ProfileContainer/>}/>}/>
						<Route path='/profile/:userId' element={<ProtectedRoute element={<ProfileContainer/>}/>}/>
						<Route path='/dialogs/*' element={<ProtectedRoute element={<DialogsContainer/>}/>}/>
						<Route path='/chat/:userId' element={<ProtectedRoute element={<ChatContainer/>}/>}/>
						<Route path='/search/*' element={<SearchContainer/>}/>
						<Route path='/add-photo/*' element={<PlusContainer/>}/>
						<Route path='/*' element={<HomeContainer/>}/>
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