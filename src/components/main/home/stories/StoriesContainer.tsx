import React from "react";
import StoriesComponent from "./StoriesComponent";
import {useAppSelector} from "../../../../hooks/hooks";
import {selectUsersTest} from "../../../../selectors/users-selectors";
import {selectHomePosts} from "../../../../selectors/home-selectors";

const StoriesContainer: React.FC = () => {
	const posts = useAppSelector(selectHomePosts);
	const users = useAppSelector(selectUsersTest);
	return <StoriesComponent posts={posts} users={users}/>
}

export default StoriesContainer;