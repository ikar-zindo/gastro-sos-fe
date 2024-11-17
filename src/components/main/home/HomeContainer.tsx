import React from "react";
import c from '../../../styles/main/Home.module.css'
import StoriesContainer from "./stories/StoriesContainer";
import NewsPostContainer from "./news/NewsPostContainer";

const HomeContainer: React.FC = () => {
	return (
		<div className={c.home}>
			<StoriesContainer/>
			<NewsPostContainer/>
		</div>
	);
}

export default HomeContainer;