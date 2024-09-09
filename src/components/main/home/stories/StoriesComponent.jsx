import React from 'react';
import StoryComponent from "../../../common/StoryComponent.jsx";
import c from '/src/styles/common/stories-component.module.css';


const StoriesComponent = (props) => {
	let users = props.users;

	// TODO: вывод историй
	let stories = users.map(user => {
		return (user ? (<StoryComponent user={user}/>) : (<div className='loading'>Loading...</div>));
	});

	return (
		<div className={c.stories}>
			{stories ? stories : (<div className='loading'>Loading...</div>)}
		</div>
	);
};

export default StoriesComponent;