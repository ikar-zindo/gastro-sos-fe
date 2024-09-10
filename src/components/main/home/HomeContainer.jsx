import React from "react";
import c from '../../../styles/main/home.module.css'
import StoriesContainer from "./stories/StoriesContainer.jsx";
import NewsPostContainer from "./news/NewsPostContainer.jsx";


const HomeContainer = () => {
	return (
		<div className={c.home}>
			<StoriesContainer/>
			<NewsPostContainer/>
		</div>
	);
}

export default HomeContainer;