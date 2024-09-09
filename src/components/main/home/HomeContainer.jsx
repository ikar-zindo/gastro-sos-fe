import React from "react";
import c from '../../../styles/main/home.module.css'
import StoriesContainer from "./HomeStoriesContainer.jsx";
import HomePostsContainer from "./HomePostContainer.jsx";

const HomeContainer = () => {
	return (
		<div className={c.home}>
			<StoriesContainer/>
			<HomePostsContainer/>
		</div>
	);
}

export default HomeContainer;