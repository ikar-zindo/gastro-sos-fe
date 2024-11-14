import {RootState} from "../store/store";

export const getDialogsPage = (state: RootState) => state.dialogPage;
export const getDialogs = (state: RootState) => state.dialogPage.dialogs;
