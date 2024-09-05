import React from 'react';
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div className={c.profileInfo}>
			<img className={c.img}
			     src='https://t3.ftcdn.net/jpg/06/27/85/32/360_F_627853212_bIw6wBo8qXXZvrj7wVXNew9fovoVSEoJ.jpg'
			     alt='content'></img>

			<div className={c.descriptionBlock}>
				ava + desc
			</div>
		</div>
	);
};

export default ProfileInfo;