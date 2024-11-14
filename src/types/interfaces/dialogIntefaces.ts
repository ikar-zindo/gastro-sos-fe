export interface DialogsState {
	dialogs: Array<DialogInterface>;
	messageValue: MessageValueInterface;
	buttonValue: string;
	placeholder: string;
}

export interface ParticipantInterface {
	userId: number | string;
}

export interface MessageInterface {
	id: number;
	senderId: number | string;
	receiverId: number | string;
	text: string;
	content: {
		img: string | null;
	}
	createdAt: string;
	read: boolean;
}

export interface DialogInterface {
	id: number;
	participants: Array<ParticipantInterface>;
	messages: Array<MessageInterface>;
}

export interface MessageValueInterface {
	text: string;
	content?: {
		img?: string | null;
	}
}