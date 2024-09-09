import React from 'react';
import StoryElement from "../../fragments/StoryElement.jsx";
import c from '/src/styles/fragments/stories-component.module.css';


const StoriesComponent = (props) => {
	let users = props.users;

	// TODO: вывод историй
	let stories = users.map(user => {
		return (user ? (<StoryElement user={user}/>) : (<div className='loading'>Loading...</div>));
	});

	return (
		<div className={c.stories}>
			{stories ? stories : (<div className='loading'>Loading...</div>)}
		</div>
	);
};

export default StoriesComponent;