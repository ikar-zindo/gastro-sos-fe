import {RootState} from "../store/store";

export const selectHomePosts = (state: RootState) => state.homePage.posts;