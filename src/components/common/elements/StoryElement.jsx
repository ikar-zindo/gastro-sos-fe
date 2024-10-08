import React from 'react';
import c from '/src/styles/common/stories-component.module.css';
import Loader from "./Loader.jsx";
import userPhoto from "../../../assets/img/userPhoto.png";

const StoryElement = (props) => {
	const user = props.user

	if (!user) {
		return <Loader/>;
	}

	return (
		<div className={c.story}>
			<img src={user.photos.small != null ? user.photos.small : userPhoto} alt="story"/>
		</div>
	);
};

export default StoryElement;