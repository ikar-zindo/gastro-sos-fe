import profilePostsSlice, {
	addPostAction,
	deletePostAction,
	updatePostTextAction
} from "../../src/store/profilePostsSlice";
import {ProfilePostsState} from "../../src/types/interfaces/profileInterfaces";
import {locate} from "../../src/utils/locates/locate";

describe('Profile Posts Actions', () => {
	let initialState: ProfilePostsState;
	const userId = 31642;

	beforeEach(() => {
		initialState = {
			posts: [
				{
					id: 0,
					userId: 31642,
					text: "It's my first post",
					likes: 3,
					dislikes: 1,
					createdAt: "12/12/24"
				},
				{
					id: 1,
					userId: 31860,
					text: 'Hi, how are you?',
					content: {
						img: ""
					},
					likes: 30,
					dislikes: 5,
					createdAt: "12/12/24"
				},
				{
					id: 2,
					userId: 31646,
					text: "I'm learning React",
					likes: 12,
					dislikes: 0,
					createdAt: "12/12/24"

				}
			],
			postValue: {
				text: "test-sos"
			},
			placeholder: locate.posts.placeholder,
			buttonValue: locate.posts.buttonValue
		}
	})

	it('length of posts should be incremented test', () => {
		const newState = profilePostsSlice(initialState, addPostAction(userId));
		expect(newState.posts.length).toBe(4);
	});

	it('message of new post should be correct test', () => {
		const newState = profilePostsSlice(initialState, addPostAction(userId));
		expect(newState.posts[3].text).toBe("test-sos");
	});

	it('after deleting length of messages should be decrement test', () => {
		let newState = profilePostsSlice(initialState, deletePostAction(0));
		expect(newState.posts.length).toBe(2);
	});

	it(`after deleting length shouldn't be decrement if id is incorrect test`, () => {
		const newState = profilePostsSlice(initialState, deletePostAction(1000));
		expect(newState.posts.length).toBe(3);
	});

	it(`after updating post value text test`, () => {
		const newState = profilePostsSlice(initialState, updatePostTextAction({text: "A"}));
		expect(newState.postValue.text).toBe("A");
	});
});