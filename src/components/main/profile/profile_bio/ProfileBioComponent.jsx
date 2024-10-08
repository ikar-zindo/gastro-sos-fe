import React from 'react';
import Loader from "../../../common/elements/Loader.jsx";
import style from "../../../../styles/main/profile/profile.module.css";

const ProfileBioComponent = (props) => {
	if (!props.profile) {
		return <Loader/>
	}
	return (
			<div className={style.profileBio}>
				<div>
					<div className={style.aboutMe}>{props.profile.aboutMe}</div>
				</div>

				<div className={style.history}>
					<div className={style.lookingForAJob}>
						{props.profile.lookingForAJob ? (
							<img src="" alt="yes"/>
						) : (
							<img src="" alt="no"/>
						)}
					</div>



					<div className={style}>{props.profile.lookingForAJobDescription}</div>
				</div>
		</div>/* && <PreloaderElement/>*/
	);
};

export default ProfileBioComponent;