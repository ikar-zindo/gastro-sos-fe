import React from 'react';
import style from "../../../../styles/main/profile/profile.module.css";
import PreloaderElement from "../../../common/elements/PreloaderElement.jsx";

const ProfileInfoComponent = (props) => {
	if (!props.profile) {
		return <PreloaderElement/>
	}
	return (
		<div className={style.profileInfo}>
			<div className={style.img}>
				<img src={props.profile.photos.small}
				     alt='[ava]'></img>
			</div>

			<div className={style.fullName}>{props.profile.fullName}</div>


			<div className={style.descriptionBlock}>
				Subscribers
			</div>
		</div>/* && <PreloaderElement/>*/
	);
};

export default ProfileInfoComponent;