import {RootState} from "../store/store";

export const selectAuth = (state: RootState) => state.auth;
export const selectAuthUserId = (state: RootState) => state.auth.id;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;