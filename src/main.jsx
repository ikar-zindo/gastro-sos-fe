import store from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import * as serviceWorker from "./serviceWorker.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // TODO: возможно <BrowserRouter/> и <Provider/> нужно будет обернуть в <App/>
	<HashRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</HashRouter>
);

// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();