const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
	dialogs: [
		{
			id: 0,
			participants: [
				{userId: 0},
				{userId: 1}
			],
			messages: [
				{
					id: 100,
					senderId: 0,
					receiverId: 1,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 101,
					senderId: 1,
					receiverId: 0,
					text: "Hi there!",
					content: {},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 1,
			participants: [
				{userId: 0},
				{userId: 2}
			],
			messages: [
				{
					id: 10,
					senderId: 2,
					receiverId: 0,
					text: "How are you?",
					content: {},
					createdAt: "12:01",
					read: false

				}
			]
		},
		{
			id: 2,
			participants: [
				{userId: 0},
				{userId: 3}
			],
			messages: [
				{
					id: 10,
					senderId: 3,
					receiverId: 0,
					text: "How are you?",
					content: {},
					createdAt: "12:01",
					read: false

				}
			]
		},
		{
			id: 4,
			participants: [
				{userId: 0},
				{userId: 4}
			],
			messages: [
				{
					id: 10,
					senderId: 4,
					receiverId: 0,
					text: "How are you?",
					content: {},
					createdAt: "12:01",
					read: false

				}
			]
		},
		{
			id: 5,
			participants: [
				{userId: 0},
				{userId: 5}
			],
			messages: [
				{
					id: 10,
					senderId: 5,
					receiverId: 0,
					text: "How are you?",
					content: {},
					createdAt: "12:01",
					read: false

				}
			]
		},
		{
			id: 6,
			participants: [
				{userId: 0},
				{userId: 6}
			],
			messages: [
				{
					id: 10,
					senderId: 6,
					receiverId: 0,
					text: "How are you?",
					content: {},
					createdAt: "12:01",
					read: false

				}
			]
		},
		{
			id: 7,
			participants: [
				{userId: 0},
				{userId: 7}
			],
			messages: [
				{
					id: 10,
					senderId: 7,
					receiverId: 0,
					text: "How are you?",
					content: {},
					createdAt: "12:01",
					read: false

				}
			]
		},
		{
			id: 8,
			participants: [
				{userId: 0},
				{userId: 8}
			],
			messages: [
				{
					id: 10,
					senderId: 8,
					receiverId: 0,
					text: "How are you?",
					content: {},
					createdAt: "12:01",
					read: false

				}
			]
		},
		{
			id: 9,
			participants: [
				{userId: 0},
				{userId: 9}
			],
			messages: [
				{
					id: 10,
					senderId: 9,
					receiverId: 0,
					text: "How are you?",
					content: {},
					createdAt: "12:01",
					read: false

				}
			]
		}
	],
	messages: [
		{id: 1, text: "Hi!", senderId: 0, receiverId: 1},
		{id: 3, text: "How are you?", senderId: 0, receiverId: 1},
		{id: 4, text: "Yo", senderId: 0, receiverId: 1}
	],
	messageValue: {
		text: ''
	}
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {

		// UPDATE_MESSAGE_TEXT
		case UPDATE_MESSAGE_TEXT: {
			return {
				...state,
				messageValue: action.messageValue
			};
		}

		// SEND_MESSAGE
		case SEND_MESSAGE: {
			let sendMessageData = action.sendMessageData;
			let dialog = state.dialogs // seach current dialog
				.find(d => (d.participants[0].userId === sendMessageData.senderId &&
					d.participants[1].userId === sendMessageData.receiverId));

			let text = state.messageValue.text;

			if (dialog) {
				let newMessage = {
					id: dialog.messages.length + 1001, // dialogId
					senderId: sendMessageData.senderId, // senderId
					receiverId: sendMessageData.receiverId, // receiverId
					text: text, // text
					content: {}, // content
					createdAt: new Date().toLocaleTimeString(),
					read: false
				};

				const updatedMessages = [...state.dialogs[dialog.id].messages, newMessage];


				const updatedDialogs = [...state.dialogs];
				updatedDialogs[dialog.id] = {
					...updatedDialogs[dialog.id],
					messages: updatedMessages
				};

				return {
					...state,
					dialogs: updatedDialogs,
					messageValue: {
						text: ''
					}
				};
			}
			return state;
		}

		default:
			return state;
	}
}

// ACTIONS
export const sendMessageAction = (sendMessageData) => ({type: SEND_MESSAGE, sendMessageData: sendMessageData})
export const updateMessageTextAction = (messageValue) => ({type: UPDATE_MESSAGE_TEXT, messageValue: messageValue})

export default dialogsReducer;