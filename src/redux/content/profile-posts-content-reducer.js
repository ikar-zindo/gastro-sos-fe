import {createSlice} from "@reduxjs/toolkit";

const profilePostsContentReducer = createSlice({
	name: "profile-posts-content",
	initialState: {
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
			// {
			// 	id: 1,
			// 	text: 'Hi, how are you?',
			// 	content: {
			// 		img: ""
			// 	},
			// 	likes: 30,
			// 	dislikes: 5,
			// 	userId: 400002,
			// 	createdAt: "12/12/24"
			// }
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
			text: "gastro-sos",
			content: {}
		},
		placeholder: "Post message",
		buttonValue: "Add post"
	},
	reducers: {
		updatePostText: (state, action) => {
			state.postValue = action.payload;
		},
		addPost: (state, action) => {
			const userId = action.payload ? action.payload : 31642;
			let newPost = {
				id: state.posts.length + 1,
				text: state.postValue.text,
				content: {},
				likes: 0,
				dislikes: 0,
				userId: userId,
				createdAt: new Date().toLocaleDateString()
			};

			state.posts.push(newPost);
			state.postValue.text = '';
		}
	}
});

export const {
	updatePostText,
	addPost
} = profilePostsContentReducer.actions

export default profilePostsContentReducer.reducer;