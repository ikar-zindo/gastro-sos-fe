import React from 'react';
import c from '../../../styles/common/StoriesComponent.module.css';
import Preloader from "./Preloader";
// @ts-ignore
import userPhoto from "../../../assets/img/userPhoto.png";
import {ProfileInfoInterface} from "../../../types/interfaces/profile-interfaces";

interface StoryElementProps {
	user: ProfileInfoInterface | null;
}

const StoryElement: React.FC<StoryElementProps> = (props) => {
	const user = props.user

	if (!user) {
		return <Preloader/>;
	}

	return (
		<div className={c.story}>
			<img src={user.photos.small != null ? user.photos.small : userPhoto} alt="story"/>
		</div>
	);
};

export default StoryElement;