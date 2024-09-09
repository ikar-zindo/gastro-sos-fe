import React from "react";
import c from '../../../styles/main/home.module.css'
import StoriesContainer from "./stories/StoriesContainer.jsx";
import HomePostsContainer from "./news/NewsPostContainer.jsx";

const HomeContainer = () => {
	return (
		<div className={c.home}>
			<StoriesContainer/>
			<HomePostsContainer/>
		</div>
	);
}

export default HomeContainer;