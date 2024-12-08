import {ChatStatus, ChatMessageAPIType} from "../types/interfaces/chat-interfaces";
import {setGlobalError} from "../store/app-slice";

const subscribers = {
	'messages-received': [] as MessagesReceivedSubscriberType[],
	'status-changed': [] as StatusChangedSubscriberType[]
};

let ws: WebSocket | null = null;

type EventNames = 'messages-received' | 'status-changed';

const closeHandler = () => {
	notifySubscribersAboutStatus(ChatStatus.Pending);
	setTimeout(createChanel, 3000);
}

const messageHandler = (e: MessageEvent) => {
	const parseMessages = JSON.parse(e.data);
	subscribers['messages-received'].forEach(subscriber => subscriber(parseMessages));
};

const openHandler = () => {
	notifySubscribersAboutStatus(ChatStatus.Ready);
};

const errorHandler = () => {
	notifySubscribersAboutStatus(ChatStatus.Error);
	setGlobalError({
		message: 'Refresh page',
		status: 500,
		code: 'SERVER ERROR',
	})
};

const cleanUp = () => {
	ws?.removeEventListener('close', closeHandler);
	ws?.removeEventListener('message', messageHandler);
	ws?.removeEventListener('open', openHandler);
	ws?.removeEventListener('error', errorHandler);
}

const notifySubscribersAboutStatus = (status: ChatStatus) => {
	subscribers["status-changed"].forEach(subscriber => subscriber(status));
}

const createChanel = () => {
	cleanUp();
	ws?.close();
	ws = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL);
	notifySubscribersAboutStatus(ChatStatus.Pending);
	ws.addEventListener('close', closeHandler);
	ws.addEventListener('message', messageHandler);
	ws.addEventListener('open', openHandler);
	ws.addEventListener('error', errorHandler);
}

export const chatApi = {
	start() {
		createChanel();
	},
	stop() {
		subscribers['messages-received'] = [];
		subscribers['status-changed'] = [];
		cleanUp();
		ws?.close();
	},
	subscribe(eventName: EventNames, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
		// @ts-ignore
		subscribers[eventName].push(callback);
		return () => {
			// @ts-ignore
			subscribers[eventName] = subscribers[eventName].filter(subscriber => subscriber !== callback);
		}
	},
	unsubscribe(eventName: EventNames, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
		// @ts-ignore
		subscribers[eventName] = subscribers[eventName].filter(subscriber => subscriber !== callback);
	},
	sendMessage(message: string) {
		ws?.send(message);
	}
}

type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void
type StatusChangedSubscriberType = (status: ChatStatus) => void
