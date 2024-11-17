import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DialogsState, MessageInterface, MessageValueInterface} from "../types/interfaces/dialog-interfaces";

const initialState: DialogsState = {
	dialogs: [
		{
			id: 0,
			participants: [
				{userId: 400000},
				{userId: 400001}
			],
			messages: [
				{
					id: 1000,
					senderId: 400000,
					receiverId: 400001,
					text: "Hello!",
					content: {
						img: null
					},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 400001,
					receiverId: 400000,
					text: "Hi there!",
					content: {
						img: null
					},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 1,
			participants: [
				{userId: 400000},
				{userId: 400002}
			],
			messages: [
				{
					id: 1000,
					senderId: 400000,
					receiverId: 400002,
					text: "Hello!",
					content: {
						img: null
					},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 400002,
					receiverId: 400000,
					text: "Hi there!",
					content: {
						img: null
					},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 2,
			participants: [
				{userId: 400000},
				{userId: 400003}
			],
			messages: [
				{
					id: 1000,
					senderId: 400000,
					receiverId: 400003,
					text: "Hello!",
					content: {
						img: null
					},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 400003,
					receiverId: 400000,
					text: "Hi there!",
					content: {
						img: null
					},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 3,
			participants: [
				{userId: 400000},
				{userId: 400004}
			],
			messages: [
				{
					id: 1000,
					senderId: 400000,
					receiverId: 400004,
					text: "Hello!",
					content: {
						img: null
					},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 400004,
					receiverId: 400000,
					text: "Hi there!",
					content: {
						img: null
					},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 4,
			participants: [
				{userId: 400000},
				{userId: 400005}
			],
			messages: [
				{
					id: 1000,
					senderId: 400000,
					receiverId: 400005,
					text: "Hello!",
					content: {
						img: null
					},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 5,
					receiverId: 0,
					text: "Hi there!",
					content: {
						img: null
					},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 5,
			participants: [
				{userId: 400000},
				{userId: 400006}
			],
			messages: [
				{
					id: 1000,
					senderId: 400000,
					receiverId: 400006,
					text: "Hello!",
					content: {
						img: null
					},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 400006,
					receiverId: 400000,
					text: "Hi there!",
					content: {
						img: null
					},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 6,
			participants: [
				{userId: 400000},
				{userId: 400007}
			],
			messages: [
				{
					id: 1000,
					senderId: 400000,
					receiverId: 400007,
					text: "Hello!",
					content: {
						img: null
					},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 400007,
					receiverId: 400000,
					text: "Hi there!",
					content: {
						img: null
					},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 7,
			participants: [
				{userId: 400000},
				{userId: 400008}
			],
			messages: [
				{
					id: 1000,
					senderId: 400000,
					receiverId: 400008,
					text: "Hello!",
					content: {
						img: null
					},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 400008,
					receiverId: 400000,
					text: "Hi there!",
					content: {
						img: null
					},
					createdAt: "12:01",
					read: false
				}
			]
		},
		{
			id: 8,
			participants: [
				{userId: 400000},
				{userId: 400009}
			],
			messages: [
				{
					id: 1000,
					senderId: 400000,
					receiverId: 400009,
					text: "Hello!",
					content: {
						img: null
					},
					createdAt: "12:00",
					read: false
				},
				{
					id: 1001,
					senderId: 400009,
					receiverId: 400000,
					text: "Hi there!",
					content: {
						img: null
					},
					createdAt: "12:01",
					read: false
				}
			]
		},
	],
	messageValue: {
		text: '',
		content: {
			img: null
		}
	},
	buttonValue: "Send",
	placeholder: "Enter message",
}

const dialogsSlice = createSlice({
	name: "dialogs",
	initialState,
	reducers: {
		updateMessageText: (state, action: PayloadAction<MessageValueInterface>) => {
			return {...state, messageValue: action.payload};
		},
		sendMessage: (state, action: PayloadAction<{ senderId: number | string; receiverId: number | string }>) => {
			let sendMessageData = action.payload;
			let dialog = state.dialogs // search current dialog
				.find(dialog => (dialog.participants[0].userId === sendMessageData.senderId &&
					dialog.participants[1].userId === sendMessageData.receiverId));

			let text = state.messageValue.text;

			if (dialog) {
				let newMessage: MessageInterface = {
					id: dialog.messages.length + 1001, // TODO: тут вообще не должен присваиватся ID (dialogId)
					senderId: sendMessageData.senderId, // senderId
					receiverId: sendMessageData.receiverId, // receiverId
					text: text, // text
					content: {
						img: null
					},
					createdAt: new Date().toLocaleTimeString(),
					read: false
				};

				dialog.messages.push(newMessage);
				state.messageValue.text = '';
			}
		}
	}
});

export const {
	sendMessage,
	updateMessageText
} = dialogsSlice.actions;
export default dialogsSlice.reducer;