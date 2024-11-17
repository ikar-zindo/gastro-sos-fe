import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {locate} from "../utils/locates/locate";
import {PostInterface, PostValueInterface} from "../types/interfaces/post-interfaces";
import {ProfilePostsState} from "../types/interfaces/profile-interfaces";

const initialState: ProfilePostsState = {
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

		},
		{
			id: 3,
			userId: 31713,
			text: "Happy Birthday",
			likes: 24,
			dislikes: 0,
			createdAt: "12/12/24"

		},
		{
			id: 4,
			userId: 31715,
			text: "Happy Birthday",
			likes: 24,
			dislikes: 0,
			createdAt: "12/12/24"

		},
		{
			id: 5,
			userId: 31318,
			text: "Hello",
			likes: 24,
			dislikes: 0,
			createdAt: "12/12/24"

		}
	],
	postValue: {
		text: ""
	},
	placeholder: locate.posts.placeholder,
	buttonValue: locate.posts.buttonValue
}

const profilePostsSlice = createSlice({
	name: "profile-posts",
	initialState,
	reducers: {
		updatePostTextAction: (state, action: PayloadAction<PostValueInterface>) => {
			// state.postValue = action.payload;
			return {...state, postValue: action.payload};
		},
		addPostAction: (state, action: PayloadAction<number | string>) => {
			const userId = action.payload;
			let newPost: PostInterface = {
				id: state.posts.length + 1,
				userId: userId,
				text: state.postValue.text,
				createdAt: new Date().toLocaleDateString()
			};

			// state.posts.push(newPost);
			// state.postValue.text = '';
			return {
				...state,
				posts: [...state.posts, newPost],
				postValue: {
					...state.postValue,
					text: ''
				}
			};
		},
		deletePostAction: (state, action: PayloadAction<number>) => {
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.payload)
			}
		}
	}
});

export const {
	updatePostTextAction,
	addPostAction,
	deletePostAction
} = profilePostsSlice.actions

export default profilePostsSlice.reducer;