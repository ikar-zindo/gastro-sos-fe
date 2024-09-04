import React from 'react';
import c from './Profile.module.css';
import MyPost from "./Posts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
	return (
		<div className={c.profile}>
			<ProfileInfo />
			<MyPost />
		</div>
	);
};

export default Profile;