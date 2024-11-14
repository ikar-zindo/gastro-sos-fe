import store from "./store/store";
// @ts-ignore
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App.jsx";

const GastroSos = () => {
	return (
		// @ts-ignore
		// 	<BrowserRouter basename={import.meta.env.BASE_URL}>
		<HashRouter> {/* HashRouter создаёт хеш приложения, что позволяет разместить на gh-pages */}
			<Provider store={store}>
				<App/>
			</Provider>
		</HashRouter>
		// </BrowserRouter>
	);
};

export default GastroSos;