import React from "react";
import NewsPostsComponent from "./NewsPostsComponent";
import {useSelector} from "react-redux";
import {getUsersTest} from "../../../../selectors/usersSelectors";
import {getHomePosts} from "../../../../selectors/homeSelectors";

const NewsPostContainer: React.FC = () => {
	const posts = useSelector(getHomePosts);
	const users = useSelector(getUsersTest);
	return <NewsPostsComponent posts={posts} users={users}/>
}

export default NewsPostContainer;