import {PostInterface, PostValueInterface} from "./postInterfaces.ts";

// PROFILE INFO
export interface ProfileState {
	profile: ProfileInfoInterface | null;
	status: string;
	loading: boolean;
	errorMessages: Array<string>;
	selectedTab: ProfileTab;
}

export interface ProfileInfoInterface {
	userId: number | string;
	aboutMe?: string;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	contacts: {
		[key: string]: string | undefined;
	}
	photos: {
		small?: string;
		large?: string;
	},
	location?: {
		city?: string | null;
		country: string;
	}
}

export interface UpdateProfileInfoInterface {
	userId: number | string;
	aboutMe: string;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	contacts: {
		[key: string]: string | undefined;
	}
}

export interface StatusResponse {
	status: string;
}

export interface PhotoResponse {
	photos: { small: string; large: string };
}

// PROFILE POSTS
export interface ProfilePostsState {
	posts: Array<PostInterface>;
	postValue: PostValueInterface;
	placeholder: string;
	buttonValue: string;
}

export enum ProfileTab {
	Bio = "bio",
	Posts = "posts",
	Stories = "stories"
}