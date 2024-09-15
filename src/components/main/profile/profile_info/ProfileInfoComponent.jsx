import React from 'react';
import style from "../../../../styles/main/profile/profile.module.css";
import PreloaderElement from "../../../common/elements/PreloaderElement.jsx";
import ProfileStatus from "./ProfileStatus.jsx";
import {useSelector} from "react-redux";

const ProfileInfoComponent = () => {
	const profile = useSelector(state => state.profilePage.profile);
	const status = useSelector(state => state.profilePage.status);

	if (!profile) {
		return <PreloaderElement/>
	}

	return (
		<div className={style.profileInfo}>
			<div className={style.img}>
				<img src={profile.photos.small}
				     alt='[ava]'></img>
			</div>

			<div className={style.fullName}>{profile.fullName}</div>


			<div className={style.descriptionBlock}>
				Subscribers
			</div>

			<div className={style.profileStatusWrapper}>
				<ProfileStatus status={status}/>
			</div>
		</div>
	);
};

export default ProfileInfoComponent;