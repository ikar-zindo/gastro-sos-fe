import {RootState} from "../store/store";

export const getHomePosts = (state: RootState) => state.homePage.posts;