import React from 'react';
import Loader from "../../../common/elements/Loader.jsx";
import style from "../../../../styles/main/profile/profile.module.css";

const ProfileBioComponent = ({profile}) => {
	if (!profile) {
		return <Loader/>
	}
	return (
			<div className={style.profileBio}>
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