import React from 'react';
import c from '../../../styles/main/home/Home.module.css'
import HomePostsContainer from "../../main/home/HomePostsContainer";
import StoriesContainer from "../../main/home/StoriesContainer";

const HomeContainer = (props) => {
	return (
		<div className={c.home}>
			<StoriesContainer store={props.store}/>
			<HomePostsContainer store={props.store}/>
		</div>
	);
}

export default HomeContainer;