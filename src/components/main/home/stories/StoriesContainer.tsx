import React from "react";
import StoriesComponent from "./StoriesComponent";
import {useAppSelector} from "../../../../hooks/hooks";
import {getUsersTest} from "../../../../selectors/users-selectors";
import {getHomePosts} from "../../../../selectors/home-selectors";

const StoriesContainer: React.FC = () => {
	const posts = useAppSelector(getHomePosts);
	const users = useAppSelector(getUsersTest);
	return <StoriesComponent posts={posts} users={users}/>
}

export default StoriesContainer;