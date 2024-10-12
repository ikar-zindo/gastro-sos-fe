import React, {useEffect} from 'react';
import style from "../../../../styles/main/profile/profile.module.css";
import Loader from "../../../common/elements/Loader.jsx";
import ProfileStatus from "./ProfileStatus.jsx";
import ProfileImage from "../../../common/elements/ProfileImage.jsx";

const ProfileInfoComponent = (props) => {
	const {profile, status, loading} = props.profilePage;

	useEffect(() => {
	}, [profile, loading]);

	if (!profile) {
		return <Loader/>
	}

	return (
		<div className={style.profileInfo}>
			<div className={style.img}>
				<ProfileImage profile={profile}/>
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