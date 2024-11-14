import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import {createStore} from "redux"; // Импортируйте вашу реализацию хранилища
import Paginator from "../../../src/components/common/elements/Paginator.tsx";

// Создайте фиктивный редьюсер для тестов
const mockReducer = (state = {}) => state;
const store = createStore(mockReducer);

describe("Paginator component tests", () => {
	test("pages count is 11 but should show only 10", () => {
		const {container} = render(
			<Provider store={store}>
				<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>

				<Paginator totalItemsCount={11}
				           pageSize={1}
				           currentPage={10}
				           currentPortion={1}
				           portionSize={10}/>
			</Provider>
		);

		const spans = container.querySelectorAll("span");
		expect(spans.length).toBe(10);
	});

	test("if pages count is more than 10, button NEXT should be present", () => {
		const {getByText} = render(
			<Provider store={store}>
				<Paginator totalItemsCount={11}
				           pageSize={1}
				           currentPage={10}
				           currentPortion={1}
				           portionSize={10}/>
			</Provider>
		);

		const nextButton = getByText("NEXT");
		expect(nextButton).toBeInTheDocument();
	});

	test("clicking on page number should call onUpdatePageClick", () => {
		const onUpdatePageClick = vi.fn();
		const {getByText} = render(
			<Provider store={store}>
				<Paginator totalItemsCount={11}
				           pageSize={1}
				           currentPage={10}
				           currentPortion={1}
				           portionSize={10}
				           onUpdatePageClick={onUpdatePageClick}
				/>
			</Provider>
		);

		const pageNumber = getByText("1");
		fireEvent.click(pageNumber);
		expect(onUpdatePageClick).toHaveBeenCalledWith(1);
	});
});
