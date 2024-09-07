import React from 'react';
import c from './Profile.module.css';
import MyPostComponent from "./profileInfo/MyPostComponent";
import ProfileInfoComponent from "./profileInfo/ProfileInfoComponent";

const ProfileComponent = (props) => {
	// debugger
	return (
		<div className={c.profile}>
			<ProfileInfoComponent />
			<MyPostComponent store={props.store}
			                 dispatch={props.dispatch}/>
		</div>
	);
};

export default ProfileComponent;