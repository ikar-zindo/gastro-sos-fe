import {render, fireEvent, screen, act} from '@testing-library/react';
import ProfileStatus from '../../../src/components/main/profile/profile_info/ProfileStatus.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {vi} from 'vitest';
import '@testing-library/jest-dom';

// Мок для редукс-диспетчера
const mockStore = configureStore();
const store = mockStore({});

describe('ProfileStatus Component', () => {
	const mockDispatch = vi.fn();

	beforeEach(() => {
		store.dispatch = mockDispatch;
	});

	it('должен отображать статус по умолчанию', () => {
		act(() => {
			render(
				<Provider store={store}>
					<ProfileStatus status="Test Status"/>
				</Provider>
			);
		});

		expect(screen.getByText('Test Status')).toBeInTheDocument();
	});

	it('должен активировать режим редактирования по двойному клику', () => {
		act(() => {
			render(
				<Provider store={store}>
					<ProfileStatus status="Test Status"/>
				</Provider>
			);
		});
		const statusElement = screen.getByText('Test Status');
		fireEvent.doubleClick(statusElement);

		expect(screen.getByDisplayValue('Test Status')).toBeInTheDocument();
	});

	// it('должен сохранять новый статус после ввода', () => {
	// 	act(() => {
	// 		render(
	// 			<Provider store={store}>
	// 				<ProfileStatus status="Test Status"/>
	// 			</Provider>
	// 		);
	// 	});
	// 	fireEvent.doubleClick(screen.getByText('Test Status'));
	//
	// 	const input = screen.getByDisplayValue('Test Status');
	// 	fireEvent.change(input, {target: {value: 'New Status'}});
	//
	// 	const submitButton = screen.getByText('Save');
	// 	fireEvent.click(submitButton);
	//
	// 	// expect(mockDispatch).toHaveBeenCalledWith('New Status');
	// 	expect(screen.getByText('New Status')).toBeInTheDocument();
	//
	// });
});
