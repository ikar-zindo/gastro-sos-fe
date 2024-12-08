import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChatState, ChatStatus, ChatMessageAPIType} from "../types/interfaces/chat-interfaces";
import {AppDispatch} from "./store";
import {chatApi} from "../api/chat-api";
import {v1} from "uuid"

const initialState: ChatState = {
	messages: [],
	status: ChatStatus.Pending
}

const chatSlice = createSlice({
	name: "chat",
	initialState,
	reducers: {
		messagesReceivedAction: (state, action: PayloadAction<ChatMessageAPIType[]>) => {
			return {
				...state, messages: [...state.messages, ...action.payload
					.map(message => ({...message, id: v1()}))]
					.filter((_message, index, array) => index >= array.length - 100)
			};
		},
		setStatusAction: (state, action: PayloadAction<ChatStatus>) => {
			return {...state, status: action.payload};
		}
	}
});

let _newMassageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null;
const newMassageHandlerCreator = (dispatch: AppDispatch) => {
	if (_newMassageHandler === null) {
		_newMassageHandler = (messages) => {
			dispatch(messagesReceivedAction(messages));
		}
	}
	return _newMassageHandler;
};

let _statusChangedHandler: ((status: ChatStatus) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: AppDispatch) => {
	if (_statusChangedHandler === null) {
		_statusChangedHandler = (status) => {
			dispatch(setStatusAction(status));
		}
	}
	return _statusChangedHandler;
};

export const startMessagesListeningThunk = () =>
	async (dispatch: AppDispatch) => {
		chatApi.start();
		chatApi.subscribe('messages-received', newMassageHandlerCreator(dispatch));
		chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
	}

export const stopMessagesListeningThunk = () =>
	async (dispatch: AppDispatch) => {
		chatApi.unsubscribe('messages-received', newMassageHandlerCreator(dispatch))
		chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
		chatApi.stop();
	}

export const sendMessagesThunk = (message: string) =>
	async () => {
		chatApi.sendMessage(message);
	}

export const {
	messagesReceivedAction,
	setStatusAction
} = chatSlice.actions;
export default chatSlice.reducer;