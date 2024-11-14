import profilePostsContentReducer, {
	addPostAction,
	deletePostAction, updatePostTextAction
} from "../../src/store/profilePostsSlice.ts";

const state = {
	posts: [
		{
			id: 0,
			text: "It's my first post",
			content: {
				img: ""
			},
			likes: 3,
			dislikes: 1,
			userId: 31642,
			createdAt: "12/12/24"
		},
		{
			id: 1,
			text: "It's my first post",
			content: {
				img: ""
			},
			likes: 3,
			dislikes: 1,
			userId: 31642,
			createdAt: "12/12/24"
		},
		{
			id: 2,
			text: "It's my first post",
			content: {
				img: ""
			},
			likes: 3,
			dislikes: 1,
			userId: 31642,
			createdAt: "12/12/24"
		}
	],
	postValue: {
		text: "test-sos",
		content: {}
	},
	placeholder: "Post message",
	buttonValue: "Add post"
};
const userId = 31642;

describe('Profile Posts Reducer', () => {
	it('length of posts should be incremented', () => {
		let action = addPostAction(userId);
		const newState = profilePostsContentReducer(state, action);
		expect(newState.posts.length).toBe(4);
	});

	it('message of new post should be correct', () => {
		let action = addPostAction(userId);
		const newState = profilePostsContentReducer(state, action);
		expect(newState.posts[3].text).toBe("test-sos");
	});

	it('after deleting length of messages should be decrement', () => {
		let action = deletePostAction(0);
		let newState = profilePostsContentReducer(state, action);
		expect(newState.posts.length).toBe(2);
	});

	it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
		let action = deletePostAction(1000);
		let newState = profilePostsContentReducer(state, action);
		expect(newState.posts.length).toBe(3);
	});

	it(`after updating post value text`, () => {
		let action = updatePostTextAction({text: "A"});
		let newState = profilePostsContentReducer(state, action);
		expect(newState.postValue.text).toBe("A");
	});
});