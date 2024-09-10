import React from "react";
import StoriesComponent from "./StoriesComponent.jsx";
import {useSelector} from "react-redux";


const StoriesContainer = () => {
	const posts = useSelector(state => state.homePage.posts);
	const users = useSelector(state => state.usersPage.users);
	return <StoriesComponent posts={posts} users={users}/>
}

export default StoriesContainer;