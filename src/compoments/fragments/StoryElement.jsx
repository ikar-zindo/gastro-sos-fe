import React from 'react';
import c from '/src/styles/fragments/stories-component.module.css';

const StoryElement = (props) => {
	return (
		<div className={c.story}>
			<img src={props.user.imgUrl} alt="story"/>
		</div>
	);
};

export default StoryElement;