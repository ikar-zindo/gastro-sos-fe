import React from "react";
import NewsPostsComponent from "./NewsPostsComponent";
import {getUsersTest} from "../../../../selectors/usersSelectors";
import {getHomePosts} from "../../../../selectors/homeSelectors";
import {useAppSelector} from "../../../../hooks/hooks";

const NewsPostContainer: React.FC = () => {
	const posts = useAppSelector(getHomePosts);
	const users = useAppSelector(getUsersTest);
	return <NewsPostsComponent posts={posts} users={users}/>
}

export default NewsPostContainer;