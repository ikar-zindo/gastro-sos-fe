import React from 'react';
import c from '/src/styles/common/stories-component.module.css';

const StoryComponent = (props) => {
	return (
		<div className={c.story}>
			<img src={props.user.imgUrl} alt="story"/>
		</div>
	);
};

export default StoryComponent;