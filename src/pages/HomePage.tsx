import React from "react";
import c from '../styles/main/Home.module.css'
import StoriesContainer from "../components/main/home/stories/StoriesContainer.tsx";
import NewsPostContainer from "../components/main/home/news/NewsPostContainer.tsx";

const HomePage: React.FC = React.memo(() => {
	return (
		<div className={c.home}>
			<StoriesContainer/>
			<NewsPostContainer/>
		</div>
	);
});

export default HomePage;