const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{
			id: 1,
			content: "It's my first post",
			likes: 3,
			dislikes: 1,
			userId: 0
		},
		{
			id: 2,
			content: 'Hi, how are you?',
			likes: 30,
			dislikes: 5,
			userId: 2
		}
		// {
		// 	id: 3,
		// 	content: "I'm learning React",
		// 	likes: 12,
		// 	dislikes: 0,
		// 	userId: 0
		// },
		// {
		// 	id: 4,
		// 	content: "Happy Birthday",
		// 	likes: 24,
		// 	dislikes: 0,
		// 	userId: 1
		// },
		// {
		// 	id: 5,
		// 	content: "Happy Birthday",
		// 	likes: 24,
		// 	dislikes: 0,
		// 	userId: 3
		// },
		// {
		// 	id: 6,
		// 	content: "Hello",
		// 	likes: 24,
		// 	dislikes: 0,
		// 	userId: 6
		// }
	],
	postValue: {
		text: 'gastro-sos'
	}
};

const myPostContentReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length + 1,
				content: state.postValue.text,
				likes: 0,
				dislikes: 0,
				userId: 0
			};

			state.posts.push(newPost);
			state.postValue.text = '';
			return state;

		case UPDATE_POST_TEXT:
			state.postValue.text = action.postText;
			return state;

		default:
			return state;
	}
}

export const addPostAction = () => ({type: ADD_POST})

export const updatePostTextAction = (postText) => ({type: UPDATE_POST_TEXT, postText: postText})

export default myPostContentReducer;