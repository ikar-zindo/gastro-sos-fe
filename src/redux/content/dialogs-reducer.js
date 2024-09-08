const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
	dialogs: [
		{
			id: 0,
			participants: [
				{userId: 20},
				{userId: 21}
			],
			messages: [
				{
					id: 1000,
					senderId: 20,
					receiverId: 21,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
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
				{userId: 20},
				{userId: 22}
			],
			messages: [
				{
					id: 1000,
					senderId: 20,
					receiverId: 22,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 2,
					receiverId: 0,
					text: "Hi there!",
					content: {},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 2,
			participants: [
				{userId: 20},
				{userId: 23}
			],
			messages: [
				{
					id: 1000,
					senderId: 20,
					receiverId: 23,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 3,
					receiverId: 0,
					text: "Hi there!",
					content: {},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 3,
			participants: [
				{userId: 20},
				{userId: 24}
			],
			messages: [
				{
					id: 1000,
					senderId: 20,
					receiverId: 24,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 4,
					receiverId: 0,
					text: "Hi there!",
					content: {},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 4,
			participants: [
				{userId: 20},
				{userId: 25}
			],
			messages: [
				{
					id: 1000,
					senderId: 20,
					receiverId: 25,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 5,
					receiverId: 0,
					text: "Hi there!",
					content: {},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 5,
			participants: [
				{userId: 20},
				{userId: 26}
			],
			messages: [
				{
					id: 1000,
					senderId: 20,
					receiverId: 26,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 6,
					receiverId: 0,
					text: "Hi there!",
					content: {},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 6,
			participants: [
				{userId: 20},
				{userId: 27}
			],
			messages: [
				{
					id: 1000,
					senderId: 20,
					receiverId: 27,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 7,
					receiverId: 0,
					text: "Hi there!",
					content: {},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 7,
			participants: [
				{userId: 20},
				{userId: 28}
			],
			messages: [
				{
					id: 1000,
					senderId: 20,
					receiverId: 28,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 8,
					receiverId: 0,
					text: "Hi there!",
					content: {},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 8,
			participants: [
				{userId: 20},
				{userId: 29}
			],
			messages: [
				{
					id: 1000,
					senderId: 20,
					receiverId: 29,
					text: "Hello!",
					content: {},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 9,
					receiverId: 0,
					text: "Hi there!",
					content: {},
					createdAt: "12:01",
					read: false
				}
			]
		},
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