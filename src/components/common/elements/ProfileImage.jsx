import React from 'react';
import userPhoto from "../../../assets/img/userPhoto.png";

const ProfileImage = ({profile}) => {
	return <img src={profile.photos.small != null ? profile.photos.small : userPhoto}
	            alt='[ava]'></img>;
};

export default ProfileImage;