/// <reference types="vitest" />
import {cleanup, render, RenderResult} from "@testing-library/react";
import store from "../src/store/store";
import App from "../src/App";
import {Provider} from "react-redux";
import '@testing-library/jest-dom';

afterEach(() => cleanup());

describe('App Component', () => {
	it('renders without crashing', () => {
		const {container}: RenderResult = render(
			<Provider store={store}>
				<App/>
			</Provider>
		);
		expect(container).toBeInTheDocument();
	});
});
