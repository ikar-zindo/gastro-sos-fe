import {RootState} from "../store/store";

export const selectDialogsPage = (state: RootState) => state.dialogPage;
export const selectDialogs = (state: RootState) => state.dialogPage.dialogs;
