import React from 'react';
import c from '/src/styles/fragments/stories/StoriesComponent.module.css';

const StoryElement = (props) => {
	return (
		<div className={c.story}>
			<img src={props.user.ava} alt="story"/>
		</div>
	);
};

export default StoryElement;