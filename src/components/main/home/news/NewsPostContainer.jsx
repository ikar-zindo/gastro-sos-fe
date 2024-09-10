import React from "react";
import NewsPostsComponent from "./NewsPostsComponent.jsx";
import {useSelector} from "react-redux";

const NewsPostContainer = () => {
	const posts = useSelector(state => state.homePage.posts);
	const users = useSelector(state => state.usersPage.users);
	return <NewsPostsComponent posts={posts} users={users}/>
}

export default NewsPostContainer;