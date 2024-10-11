import React, {useEffect} from "react";
import './App.css';
import FooterContainer from "./components/common/FooterContainer.jsx";
import ProfileContainer from "./components/main/profile/ProfileContainer";
import NavbarContainer from "./components/common/NavbarContainer.jsx";
import RightContainer from "./components/main/right/RightContainer.jsx";
import NavigateContainer from "./components/common/NavigateContainer.jsx";
import {Route, Routes} from "react-router-dom";
import HomeContainer from "./components/main/home/HomeContainer";
import DialogsContainer from "./components/main/dialogs/DialogsContainer";
import ChatContainer from "./components/main/chat/ChatContainer";
import SearchContainer from "./components/main/search/SearchContainer";
import PlusContainer from "./components/main/plus/PlusContainer";
import HeaderContainer from "./components/common/header/HeaderContainer.jsx";
import LoginContainer from "./components/main/login/LoginContainer.jsx";
import ProtectedRoute from "./hoc/ProtectedRoute.jsx";
import WithAuthRedirect from "./hoc/WithAuthRedirect.jsx";
import {useDispatch, useSelector} from "react-redux";
import Loader from "./components/common/elements/Loader.jsx";
import {initializeApp} from "./redux/app-reducer.js";

const App = () => {
	const dispatch = useDispatch();
	const initialized = useSelector(state => state.app.initialized);

		console.log(import.meta.env.BASE_URL)
	useEffect(() => {
		dispatch(initializeApp());

	}, [dispatch]);

	if (!initialized) {
		return <Loader/>;
	}

	return (
		<div className="app-wrapper">
			<HeaderContainer/>
			<NavbarContainer/>

			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/' element={<HomeContainer/>}/>
					<Route path='/login/' element={<WithAuthRedirect><LoginContainer/></WithAuthRedirect>}/>

					<Route path='/profile/*' element={<ProtectedRoute element={<ProfileContainer/>}/>}/>
					<Route path='/profile/:userId' element={<ProfileContainer/>}/>
					<Route path='/dialogs/*' element={<ProtectedRoute element={<DialogsContainer/>}/>}/>
					<Route path='/chat/:userId' element={<ProtectedRoute element={<ChatContainer/>}/>}/>

					<Route path='/search/*' element={<SearchContainer/>}/>
					<Route path='/add-photo/*' element={<PlusContainer/>}/>
					<Route path='/*' element={<HomeContainer/>}/>
				</Routes>
			</div>

			<RightContainer/>
			<NavigateContainer/>
			<FooterContainer/>
		</div>
	);
}

export default App;