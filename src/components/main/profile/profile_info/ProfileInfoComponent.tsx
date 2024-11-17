import React, {useEffect} from 'react';
import style from "../../../../styles/main/profile/Profile.module.css";
import Preloader from "../../../common/elements/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileImage from "../../../common/elements/ProfileImage";
// @ts-ignore
import photoImage from "../../../../assets/img/icons/photo-image.svg";
import {ProfileState} from "../../../../types/interfaces/profile-interfaces";
import {useAppDispatch} from "../../../../hooks/hooks";
import {putPhoto} from "../../../../store/profile-slice";

interface ProfileProps {
	profilePage: ProfileState;
}

const ProfileInfoComponent: React.FC<ProfileProps> = ({ ...props}) => {
	const dispatch = useAppDispatch();
	const {profile, status} = props.profilePage;

	if (!profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			dispatch(putPhoto(e.target.files[0]));
		}
	}

	useEffect(() => {
	}, [profile]);


	return (
		<div className={style.profileInfo}>
			<div className={style.img}>
				<ProfileImage
					className={style.profileImage}
					profile={profile}/>
				<input
					type="file"
					id="file-input"
					className={style.fileInput}
					onChange={onMainPhotoSelected}
				/>
				<label htmlFor="file-input" className={style.fileLabel}>
					<img src={photoImage} alt="Upload" />
				</label>
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