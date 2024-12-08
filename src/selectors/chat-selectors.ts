import {RootState} from "../store/store";

export const selectChatMessages = (state: RootState) => state.chatPage.messages;
export const selectChatStatus = (state: RootState) => state.chatPage.status;