import {
	follow,
	unfollow,
	followAction,
	unfollowAction,
	toggleFollowingInProgressAction
} from "../../src/store/usersSlice";
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import {followAPI} from '../../src/api/followAPI';
import {vi} from 'vitest';
import {APIResponseType, RC} from "../../src/types/api/commonTypes";
import {AxiosHeaders, AxiosResponse} from "axios";

vi.mock("../../src/api/followAPI", () => ({
	followAPI: {
		followUser: vi.fn(),
		unfollowUser: vi.fn(),
	}
}));

describe('Users Thunks', () => {
	const mockFollowAPI = followAPI as jest.Mocked<typeof followAPI>;
	const mockStore = configureStore();
	const mockDispatch = vi.fn();
	const store = mockStore({});

	const resultSuccess: APIResponseType = {
		data: {},
		resultCode: RC.Success,
		messages: [],
	};

	const headers = new AxiosHeaders();
	headers.set("Content-Type", "application/json");
	const mockAxiosResponseSuccess: AxiosResponse<APIResponseType> = {
		data: resultSuccess,
		status: 200,
		statusText: 'OK',
		headers: {},
		config: {
			headers
		},
		request: {},
	};

	beforeEach(() => {
		mockDispatch.mockClear();
		mockFollowAPI.followUser.mockClear();
		mockFollowAPI.unfollowUser.mockClear();
	});

	it(`follow success test`, async () => {
		mockFollowAPI.followUser.mockResolvedValueOnce(Promise.resolve(mockAxiosResponseSuccess));
		const thunk = follow(1);
		await thunk(mockDispatch);

		expect(mockDispatch).toHaveBeenCalledTimes(3);
		expect(mockDispatch).toHaveBeenNthCalledWith(1, toggleFollowingInProgressAction({isFetching: true, userId: 1}));
		expect(mockDispatch).toHaveBeenNthCalledWith(2, followAction(1));
		expect(mockDispatch).toHaveBeenNthCalledWith(3, toggleFollowingInProgressAction({isFetching: false, userId: 1}));
	});

	it(`unfollow success test`, async () => {
		mockFollowAPI.unfollowUser.mockResolvedValueOnce(Promise.resolve(mockAxiosResponseSuccess));
		const thunk = unfollow(1);
		await thunk(mockDispatch);

		expect(mockDispatch).toHaveBeenCalledTimes(3);
		expect(mockDispatch).toHaveBeenNthCalledWith(1, toggleFollowingInProgressAction({isFetching: true, userId: 1}));
		expect(mockDispatch).toHaveBeenNthCalledWith(2, unfollowAction(1));
		expect(mockDispatch).toHaveBeenNthCalledWith(3, toggleFollowingInProgressAction({isFetching: false, userId: 1}));
	});

	it(`follow failure test`, async () => {
		const errorResponse = {
			response: {
				status: 400,
				data: {
					resultCode: 1,
					messages: ['Request failed with status code 400']
				},
			}
		};

		// mockFollowAPI.followUser.mockRejectedValueOnce(errorResponse);

		// const thunk = follow(1); // Пример с userId = 1
		// await thunk(mockDispatch);

		// Проверяем, что dispatch был вызван нужное количество раз
		// expect(mockDispatch).toHaveBeenCalledTimes(3);

		// Проверяем, что был вызван экшен с ошибкой
		// const actions = mockDispatch.mock.calls.map(call => call[0]);
		// expect(actions[2]).toEqual({
		// 	type: 'app/setGlobalError',
		// 	payload: {
		// 		status: 400,
		// 		code: 'ERR_BAD_REQUEST',
		// 		message: 'Request failed with status code 400',
		// 	},
		// });
	});
});