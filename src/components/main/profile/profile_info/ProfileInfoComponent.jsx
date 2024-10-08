import React, {useEffect} from 'react';
import style from "../../../../styles/main/profile/profile.module.css";
import PreloaderElement from "../../../common/elements/PreloaderElement.jsx";
import ProfileStatus from "./ProfileStatus.jsx";
import userPhoto from "../../../../assets/img/userPhoto.png"

const ProfileInfoComponent = (props) => {
	const profile = props.profilePage.profile;
	const status = props.profilePage.status;

	useEffect(() => {

	}, [profile]);


	if (!profile || !status) {
		return <PreloaderElement/>
	}

	return (
		<div className={style.profileInfo}>
			<div className={style.img}>
				<img src={profile.photos.small != null ? profile.photos.small : userPhoto}
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