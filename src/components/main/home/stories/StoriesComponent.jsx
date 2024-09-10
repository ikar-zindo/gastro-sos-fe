import React from 'react';
import StoryElement from "../../../common/elements/StoryElement.jsx";
import c from '/src/styles/common/stories-component.module.css';


const StoriesComponent = (props) => {
	let users = props.users;

	// TODO: вывод историй
	let stories = users.map(user => {
		return <StoryElement user={user}/>;
	});

	return (
		<div className={c.stories}>
			{stories ? stories : (<div className='loading'>Loading...</div>)}
		</div>
	);
};

export default StoriesComponent;