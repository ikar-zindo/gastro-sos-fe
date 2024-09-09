const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{
			id: 0,
			text: "It's my first post",
			content: {
				img: ""
			},
			likes: 3,
			dislikes: 1,
			userId: 20,
			createdAt: "12/12/24"
		},
		{
			id: 1,
			text: 'Hi, how are you?',
			content: {
				img: ""
			},
			likes: 30,
			dislikes: 5,
			userId: 22,
			createdAt: "12/12/24"
		}
		// {
		// 	id: 3,
		// 	content: "I'm learning React",
		// 	likes: 12,
		// 	dislikes: 0,
		// 	userId:20
		// },
		// {
		// 	id: 4,
		// 	content: "Happy Birthday",
		// 	likes: 24,
		// 	dislikes: 0,
		// 	userId:21
		// },
		// {
		// 	id: 5,
		// 	content: "Happy Birthday",
		// 	likes: 24,
		// 	dislikes: 0,
		// 	userId:23
		// },
		// {
		// 	id: 6,
		// 	content: "Hello",
		// 	likes: 24,
		// 	dislikes: 0,
		// 	userId:26
		// }
	],
	postValue: {
		text: 'gastro-sos'
	}
};

const profilePostsContentReducer = (state = initialState, action) => {

	switch (action.type) {
		// UPDATE_POST_TEXT
		case UPDATE_POST_TEXT: {
			return {
				...state,
				postValue: {
					...state.postValue,
					text: action.postValue.text
				}
			};
		}

		// ADD_POST
		case ADD_POST: {
			let newPost = {
				id: state.posts.length + 1,
				text: state.postValue.text,
				content: {},
				likes: 0,
				dislikes: 0,
				userId: 20,
				createdAt: new Date().toLocaleDateString()
			};

			return {
				...state,
				posts: [...state.posts, newPost],
				postValue: {
					text: ''
				}
			};
		}

		default:
			return state;
	}
}

export const addPostAction = () => ({type: ADD_POST})

export const updatePostTextAction = (postValue) => ({type: UPDATE_POST_TEXT, postValue: postValue})

export default profilePostsContentReducer;