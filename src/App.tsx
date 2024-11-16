import React, {useEffect} from "react";
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {initializeApp, setGlobalError} from "./store/appSlice";
import Preloader from "./components/common/elements/Preloader";
import WithAuthRedirect from "./hoc/WithAuthRedirect";
import ProtectedRoute from "./hoc/ProtectedRoute";
import WithSuspense from "./hoc/WithSuspense";
import FooterContainer from "./components/common/FooterContainer";
import NavigateContainer from "./components/common/NavigateContainer";
import NavbarContainer from "./components/common/NavbarContainer";
import RightContainer from "./components/main/right/RightContainer";
import HeaderContainer from "./components/common/header/HeaderContainer";
import LoginContainer from "./components/main/login/LoginContainer";
import ProfileContainer from "./components/main/profile/ProfileContainer";
import ChatContainer from "./components/main/chat/ChatContainer";
import HomeContainer from "./components/main/home/HomeContainer";
import SearchContainer from "./components/main/search/SearchContainer";
import PlusContainer from "./components/main/plus/PlusContainer";
import {getIsInitialedApp} from "./selectors/initialSelectors";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {getGlobalError} from "./selectors/appSelectors";
import ErrorModal from "./components/common/elements/ErrorModal";

const DialogsContainer = React.lazy(() => import("./components/main/dialogs/DialogsContainer"));

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const initialized = useAppSelector(getIsInitialedApp);
	const globalError = useAppSelector(getGlobalError);

	useEffect(() => {
		dispatch(initializeApp());

		const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
			const reason = event.reason
			let code = reason.code || 'UNKNOWN_CODE';
			let message = reason.message || 'Unknown error occurred';
			let status = reason.status || 999;

			if (reason instanceof Error) { // Check if the reason is an Error object
				dispatch(setGlobalError({code, message, status}));
			}
			console.error({from: "<App/>", status, code, message});
		};
		window.addEventListener("unhandledrejection", handleUnhandledRejection);

		const updateVh = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};
		updateVh(); // Инициализация при первом рендере
		window.addEventListener('resize', updateVh);

		return () => { // Cleanup the event listener on component unmount
			window.removeEventListener("unhandledrejection", handleUnhandledRejection);
			window.removeEventListener('resize', updateVh);
		};
	}, [dispatch]);

	if (!initialized) {
		return <Preloader/>;
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
			{globalError && <ErrorModal error={globalError}/>}
		</div>
	);
}

export default App;