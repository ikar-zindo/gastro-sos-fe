import React from 'react';
import c from './Profile.module.css';
import MyPost from "./Posts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className={c.profile}>
			<ProfileInfo />
			<MyPost users={props.users}
			        postContent={props.profilePage.postContent}
			        dispatch={props.dispatch}/>
		</div>
	);
};

export default Profile;