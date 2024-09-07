import React from 'react';
import c from '../../../styles/main/profile/Profile.module.css';
import ProfilePostsContainer from "./ProfilePostsContainer";
import ProfileInfoContainer from "./ProfileInfoContainer";

const ProfileContainer = (props) => {
	return (
		<div className={c.profile}>
			<ProfileInfoContainer />
			<ProfilePostsContainer store={props.store}/>
		</div>
	);
};

export default ProfileContainer;