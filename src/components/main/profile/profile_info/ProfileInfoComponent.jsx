import React from 'react';
import style from "../../../../styles/main/profile/profile.module.css";
import PreloaderComponent from "../../../common/PreloaderComponent.jsx";

const ProfileInfoComponent = (props) => {
	if (!props.profile) {
		return <PreloaderComponent/>
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
		</div>/* && <PreloaderComponent/>*/
	);
};

export default ProfileInfoComponent;