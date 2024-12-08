export interface ChatState {
	messages: ChatMessageType[];
	status: ChatStatus;
}

export enum ChatStatus {
	Pending = 'pending',
	Ready = 'ready',
	Error = 'error',
}

export type ChatMessageAPIType = {
	message: string;
	photo: string;
	userId: number | string;
	userName: string;
}

export type ChatMessageType = ChatMessageAPIType & {id: string};