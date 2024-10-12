import React from 'react';
import Loader from "../../../common/elements/Loader.jsx";
import style from "../../../../styles/main/profile/profile.module.css";

const ProfileBioComponent = ({profile, isOwner, savePhoto}) => {
	if (!profile) {
		return <Loader/>
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return (
			<div className={style.profileBio}>
				{ isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				
				<div>
					<div className={style.aboutMe}>{profile.aboutMe}</div>
				</div>

				<div className={style.history}>
					<div className={style.lookingForAJob}>
						{profile.lookingForAJob ? (
							<img src="" alt="yes"/>
						) : (
							<img src="" alt="no"/>
						)}
					</div>

					<div className={style}>{profile.lookingForAJobDescription}</div>
				</div>
		</div>
	);
};

export default ProfileBioComponent;