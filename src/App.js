import React from "react";
import './App.css';
import Header from "./compoments/Fragments/Header/Header";
import Footer from "./compoments/Fragments/Footer/Footer";
import Profile from "./compoments/Main/Profile/Profile";
import Navbar from "./compoments/Fragments/Navbar/Navbar";
import Right from "./compoments/Main/Right/Right";
import Navigate from "./compoments/Fragments/Navigate/Navigate";
import Dialogs from "./compoments/Main/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>

				<Navbar/>

				<div className='app-wrapper-content'>
					<Routes>
						<Route
							path="/profile"
							element={<Profile
								users={props.state.users}
								profilePage={props.state.profilePage}
								dispatch={props.dispatch}/>}/>
						<Route
							path="/dialogs"
							element={<Dialogs
								store={props.store}
								users={props.state.users}
								dialogPage={props.state.dialogPage}/>}/>
					</Routes>
				</div>

				<Right/>

				<Navigate/>

				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;