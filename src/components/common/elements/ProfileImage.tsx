import React from 'react';
// @ts-ignore
import userPhoto from "../../../assets/img/userPhoto.png";
import cn from "classnames";
import {ProfileInfoInterface} from "../../../types/interfaces/profileInterfaces";

interface ProfileImageProps {
	profile: ProfileInfoInterface;
	className?: string;
}

const ProfileImage: React.FC<ProfileImageProps>  = ({profile, className}) => {
	return <img className={cn(className)} src={profile.photos.small != null ? profile.photos.small : userPhoto}
	            alt='[ava]'></img>;
};

export default ProfileImage;