export interface DialogsState {
	dialogs: DialogInterface[];
	messageValue: MessageValueInterface;
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
	participants: ParticipantInterface[];
	messages: MessageInterface[];
}

export interface MessageValueInterface {
	text: string;
	content?: {
		img?: string | null;
	}
}
