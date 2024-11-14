import React from 'react';
import StoryElement from "../../../common/elements/StoryElement";
import c from '/src/styles/common/stories-component.module.css';
import {ProfileInfoInterface} from "../../../../types/interfaces/profileInterfaces";
import {PostInterface} from "../../../../types/interfaces/postInterfaces";

interface StoryComponentProps {
	users: Array<ProfileInfoInterface>
	posts: Array<PostInterface>
}

const StoriesComponent: React.FC<StoryComponentProps> = (props) => {
	let users = props.users;

	// TODO: вывод историй
	let stories = users.map(user => {
		return <StoryElement key={user.userId} user={user}/>;
	});

	return (
		<div className={c.stories}>
			{stories}
		</div>
	);
};

export default StoriesComponent;