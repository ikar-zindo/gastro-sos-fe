import React from 'react';
import c from '/src/styles/common/stories-component.module.css';
import PreloaderElement from "./PreloaderElement.jsx";

const StoryElement = (props) => {
	const user = props.user

	if (!user) {
		return <PreloaderElement/>;
	}

	return (
		<div className={c.story}>
			<img src={user.imgUrl} alt="story"/>
		</div>
	);
};

export default StoryElement;