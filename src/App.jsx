import React, {useEffect} from "react";
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer.js";
import Loader from "./components/common/elements/Loader.jsx";
import WithAuthRedirect from "./hoc/WithAuthRedirect.jsx";
import ProtectedRoute from "./hoc/ProtectedRoute.jsx";
import FooterContainer from "./components/common/FooterContainer.jsx";
import NavbarContainer from "./components/common/NavbarContainer.jsx";
import RightContainer from "./components/main/right/RightContainer.jsx";
import NavigateContainer from "./components/common/NavigateContainer.jsx";
import HeaderContainer from "./components/common/header/HeaderContainer.jsx";
import LoginContainer from "./components/main/login/LoginContainer.jsx";
import ProfileContainer from "./components/main/profile/ProfileContainer";
import ChatContainer from "./components/main/chat/ChatContainer";
import HomeContainer from "./components/main/home/HomeContainer";
import SearchContainer from "./components/main/search/SearchContainer";
import PlusContainer from "./components/main/plus/PlusContainer";
import WithSuspense from "./hoc/WithSuspense.jsx";

const DialogsContainer = React.lazy(() => import('./components/main/dialogs/DialogsContainer'));

const App = () => {
	const dispatch = useDispatch();
	const initialized = useSelector(state => state.app.initialized);

	useEffect(() => {
		dispatch(initializeApp());

		const updateVh = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		updateVh(); // Инициализация при первом рендере
		window.addEventListener('resize', updateVh);

		return () => {
			window.removeEventListener('resize', updateVh);
		};
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
					<Route path='/dialogs/*' element={
						<ProtectedRoute element={
							<WithSuspense Component={DialogsContainer}/>}/>}/>
					<Route path='/chat/:userId' element={<ProtectedRoute element={<ChatContainer/>}/>}/>

					<Route path='/search/*' element={<SearchContainer/>}/>
					<Route path='/add-photo/*' element={<PlusContainer/>}/>
					<Route path='/*' element={<Navigate to="/" replace/>}/>
					{/*<Route path='/*' element={<div>404</div>}/>*/}
				</Routes>

			</div>

			<RightContainer/>
			<NavigateContainer/>
			<FooterContainer/>
		</div>
	);
}

export default App;