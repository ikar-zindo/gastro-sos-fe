import React, {act} from 'react';
import {createRoot} from 'react-dom/client';
import App from '../src/App';
// import {cleanup} from "vitest-browser-react";
import {render, cleanup} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../src/redux/store.js";

afterEach(() => cleanup());

describe('App Component', () => {
	it('renders without crashing', () => {
		const {container} = render(
			<Provider store={store}>
				<App/>
			</Provider>
		);
		expect(container).toBeInTheDocument();

		// OLD
		// const div = document.createElement('div');
		// const root = createRoot(div);
		// act(() => {
		// 	root.render(<App/>);
		// 	root.unmount();
		// });
	});
});
