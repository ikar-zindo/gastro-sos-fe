import React, {useEffect} from 'react';
import style from "../../../../styles/main/profile/profile.module.css";
import Loader from "../../../common/elements/Loader.jsx";
import ProfileStatus from "./ProfileStatus.jsx";
import ProfileImage from "../../../common/elements/ProfileImage.jsx";
import photoImage from "../../../../assets/img/icons/photo-image.svg";

const ProfileInfoComponent = ({savePhoto, ...props}) => {
	const {profile, status, loading} = props.profilePage;

	if (!profile) {
		return <Loader/>
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	useEffect(() => {
	}, [profile, loading]);


	return (
		<div className={style.profileInfo}>
			<div className={style.img}>
				<ProfileImage className={style.profileImage} profile={profile}/>
				{/* Скрытый инпут */}
				<input
					type="file"
					id="file-input"
					className={style.fileInput}
					onChange={onMainPhotoSelected}
				/>
				{/* Кастомный элемент */}
				<label htmlFor="file-input" className={style.fileLabel}>
					{/* Ваш SVG */}
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