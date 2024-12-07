import {RootState} from "../store/store";

export const selectProfilePage = (state: RootState) => state.profilePage;
export const selectIsLoading = (state: RootState) => state.profilePage.loading;