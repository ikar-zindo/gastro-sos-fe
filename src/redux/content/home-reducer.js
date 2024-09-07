let initialState = {
	posts: [
		{
			id: 1,
			userId: 0,
			content: "It's my first post",
			likes: 3,
			dislikes: 1
		},
		{
			id: 2,
			userId: 2,
			content: 'Hi, how are you?',
			likes: 30,
			dislikes: 5
		},
		{
			id: 3,
			userId: 3,
			content: "I'm learning React",
			likes: 12,
			dislikes: 0,
		},
		{
			id: 4,
			userId: 4,
			content: "Happy Birthday",
			likes: 24,
			dislikes: 0
		},
		{
			id: 5,
			userId: 3,
			content: "Happy Birthday",
			likes: 24,
			dislikes: 0
		},
		{
			id: 6,
			userId: 6,
			content: "Hello",
			likes: 24,
			dislikes: 0
		}
	]
};

const homeReducer = (state = initialState, action) => {

	return state;
}

export default homeReducer;