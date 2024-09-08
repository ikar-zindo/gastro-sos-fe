import c from '../../../styles/main/profile/Profile.module.css';
import ProfilePostsContainer from "./ProfilePostsContainer.jsx";
import React from "react";
import ProfileInfoContainer from "./ProfileInfoContainer.jsx";

const ProfileContainer = () => {
	return (
		<div className={c.profile}>
			<ProfileInfoContainer/>
			<ProfilePostsContainer/>
		</div>
	);
};


export default ProfileContainer;