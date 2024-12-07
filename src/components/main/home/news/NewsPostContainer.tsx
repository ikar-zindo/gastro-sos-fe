import React from "react";
import NewsPostsComponent from "./NewsPostsComponent";
import {selectUsersTest} from "../../../../selectors/users-selectors";
import {selectHomePosts} from "../../../../selectors/home-selectors";
import {useAppSelector} from "../../../../hooks/hooks";

const NewsPostContainer: React.FC = () => {
	const posts = useAppSelector(selectHomePosts);
	const users = useAppSelector(selectUsersTest);
	return <NewsPostsComponent posts={posts} users={users}/>
}

export default NewsPostContainer;