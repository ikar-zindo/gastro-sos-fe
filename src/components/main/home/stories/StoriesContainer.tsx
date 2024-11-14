import React from "react";
import StoriesComponent from "./StoriesComponent";
import {useAppSelector} from "../../../../hooks/hooks";
import {getUsersTest} from "../../../../selectors/usersSelectors";
import {getHomePosts} from "../../../../selectors/homeSelectors";

const StoriesContainer: React.FC = () => {
	const posts = useAppSelector(getHomePosts);
	const users = useAppSelector(getUsersTest);
	return <StoriesComponent posts={posts} users={users}/>
}

export default StoriesContainer;