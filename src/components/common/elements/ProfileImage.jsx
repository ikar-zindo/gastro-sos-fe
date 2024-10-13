import React from 'react';
import userPhoto from "../../../assets/img/userPhoto.png";
import cn from "classnames";

const ProfileImage = ({profile, className}) => {
	return <img className={cn(className)} src={profile.photos.small != null ? profile.photos.small : userPhoto}
	            alt='[ava]'></img>;
};

export default ProfileImage;