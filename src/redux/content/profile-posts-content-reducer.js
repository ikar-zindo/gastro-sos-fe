const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{
			id: 1,
			text: "It's my first post",
			content: {},
			likes: 3,
			dislikes: 1,
			userId: 0,
			createdAt: "12/12/24"
		},
		{
			id: 2,
			text: 'Hi, how are you?',
			content: {},
			likes: 30,
			dislikes: 5,
			userId: 2,
			createdAt: "12/12/24"
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

const profilePostsContentReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length + 1,
				text: state.postValue.text,
				content: {},
				likes: 0,
				dislikes: 0,
				userId: 0,
				createdAt: "12/12/24"
			};

			state.posts.push(newPost);
			state.postValue.text = '';
			return state;

		case UPDATE_POST_TEXT:
			state.postValue.text = action.postValue.text;
			return state;

		default:
			return state;
	}
}

export const addPostAction = () => ({type: ADD_POST})

export const updatePostTextAction = (postValue) => ({type: UPDATE_POST_TEXT, postValue: postValue})

export default profilePostsContentReducer;