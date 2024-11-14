import {RootState} from "../store/store";

export const getAuth = (state: RootState) => state.auth;
export const getAuthUserId = (state: RootState) => state.auth.id;
export const getIsAuth = (state: RootState) => state.auth.isAuth;