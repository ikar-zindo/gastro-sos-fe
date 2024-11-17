import {RootState} from "../store/store";

export const getProfilePage = (state: RootState) => state.profilePage;
export const getIsLoading = (state: RootState) => state.profilePage.loading;