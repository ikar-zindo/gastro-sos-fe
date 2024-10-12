import React from 'react';
import userPhoto from "../../../assets/img/userPhoto.png";
import styles from "../../../styles/main/profile/ProfileInfo.module.css";
const ProfileImage = ({profile}) => {
	return <img src={profile.photos.small != null ? profile.photos.small : userPhoto}
	            alt='[ava]'></img>;
};

export default ProfileImage;