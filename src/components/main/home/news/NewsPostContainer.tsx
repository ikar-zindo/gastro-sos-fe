import React from "react";
import NewsPostsComponent from "./NewsPostsComponent";
import {getUsersTest} from "../../../../selectors/users-selectors";
import {getHomePosts} from "../../../../selectors/home-selectors";
import {useAppSelector} from "../../../../hooks/hooks";

const NewsPostContainer: React.FC = () => {
	const posts = useAppSelector(getHomePosts);
	const users = useAppSelector(getUsersTest);
	return <NewsPostsComponent posts={posts} users={users}/>
}

export default NewsPostContainer;