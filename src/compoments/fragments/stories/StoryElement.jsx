import React from 'react';
import c from '../../../styles/fragments/stories/StoriesComponent.model.css';

const StoryElement = (props) => {
	return (
		<div className={c.story}>
			<img src={props.user.ava} alt="story"/>
		</div>
	);
};

export default StoryElement;