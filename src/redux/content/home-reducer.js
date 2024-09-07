let initialState = {
	posts: [
		{
			id: 1,
			userId: 0,
			text: "It's my first post",
			content: {},
			comments: [
				{
					id: 0,
					userId: 1,
					text: "Good",
				}
			],
			likes: 3,
			dislikes: 1
		},
		{
			id: 2,
			userId: 2,
			text: 'Hi, how are you?',
			content: {},
			comments: [],
			likes: 30,
			dislikes: 5
		},
		{
			id: 3,
			userId: 3,
			text: "I'm learning React",
			content: {},
			comments: [],
			likes: 12,
			dislikes: 0,
		},
		{
			id: 4,
			userId: 4,
			text: "Happy Birthday",
			content: {},
			comments: [],
			likes: 24,
			dislikes: 0
		},
		{
			id: 5,
			userId: 3,
			text: "Happy Birthday",
			content: {},
			comments: [],
			likes: 24,
			dislikes: 0
		},
		{
			id: 6,
			userId: 6,
			text: "Hello",
			content: {},
			comments: [],
			likes: 24,
			dislikes: 0
		}
	]
};

const homeReducer = (state = initialState, action) => {

	return state;
}

export default homeReducer;