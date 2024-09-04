import React from "react";
import './App.css';
import Header from "./compoments/Header/Header";
import Footer from "./compoments/Footer/Footer";
import Profile from "./compoments/Profile/Profile";
import Navbar from "./compoments/Navbar/Navbar";
import Right from "./compoments/Right/Right";
import Navigate from "./compoments/Navigate/Navigate";
import Dialogs from "./compoments/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>

				<Navbar/>

				<div className='app-wrapper-content'>
					<Routes>
						<Route path="/profile" element={<Profile />}/>
						<Route path="/dialogs" element={<Dialogs />}/>
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