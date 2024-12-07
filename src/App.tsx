import React, {useEffect} from "react";
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {initializeApp, setGlobalError} from "./store/app-slice";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import SearchPage from "./pages/SearchPage";
import PlusPage from "./components/main/plus/PlusPage";
import FooterContainer from "./components/common/FooterContainer";
import NavigateContainer from "./components/common/NavigateContainer";
import NavbarContainer from "./components/common/NavbarContainer";
import RightContainer from "./components/main/right/RightContainer";
import HeaderContainer from "./components/common/header/HeaderContainer";
import WithAuthRedirect from "./hoc/WithAuthRedirect";
import WithSuspense from "./hoc/WithSuspense";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Preloader from "./components/common/elements/Preloader";
import {selectIsInitialedApp} from "./selectors/initial-selectors";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {selectGlobalError} from "./selectors/app-selectors";
import ErrorModal from "./components/common/elements/ErrorModal";

const DialogsPage = React.lazy(() => import("./pages/DialogsPage"));

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const initialized = useAppSelector(selectIsInitialedApp);
	const globalError = useAppSelector(selectGlobalError);

	useEffect(() => {
		dispatch(initializeApp());

		const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
			const reason = event.reason;

			let status = reason.status;
			let message = reason?.response?.data?.message || reason.message;
			let code = reason.code;

			if (reason instanceof Error) {
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
					<Route path='/' element={<HomePage/>}/>
					<Route path='/login/' element={<WithAuthRedirect><LoginPage/></WithAuthRedirect>}/>

					<Route path='/profile/*' element={<ProtectedRoute element={<ProfilePage/>}/>}/>
					<Route path='/profile/:userId' element={<ProfilePage/>}/>
					<Route path='/dialogs/*' element={
						<ProtectedRoute element={
							<WithSuspense Component={DialogsPage}/>}/>}/>
					<Route path='/chat/:userId' element={<ProtectedRoute element={<ChatPage/>}/>}/>

					<Route path='/search/*' element={<SearchPage/>}/>
					<Route path='/add-photo/*' element={<PlusPage/>}/>
					<Route path='/*' element={<Navigate to="/" replace/>}/>
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