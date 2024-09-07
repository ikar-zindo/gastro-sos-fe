import React from 'react';
import c from "../../../styles/main/home/Home.module.css";
import StoryElement from "../../fragments/stories/StoryElement";

const StoriesContainer = (props) => {
	let users = props.store.getState().users;

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

export default StoriesContainer;