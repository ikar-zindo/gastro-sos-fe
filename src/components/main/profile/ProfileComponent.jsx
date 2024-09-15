import React, {useState} from 'react';
import ProfilePostsContainer from "./profile_posts/ProfilePostsContainer.jsx";
import ProfileInfoComponent from "./profile_info/ProfileInfoComponent.jsx";
import style from "../../../styles/main/profile/profile.module.css";
import ProfileBioComponent from "./profile_bio/ProfileBioComponent.jsx";
import {useSelector} from "react-redux";

const ProfileComponent = (props) => {
	const profile = useSelector(state => state.profilePage.profile);
	const [selectedTab, setSelectedTab] = useState('posts');

	return (
		<div className={style.profile}>
			<ProfileInfoComponent profile={profile}/>

			<div className={style.switchButtons}>
				<button onClick={() => setSelectedTab('bio')} className={selectedTab === 'bio' ? style.activeButton : ''}>
					Bio
				</button>
				<button onClick={() => setSelectedTab('posts')}
				        className={selectedTab === 'posts' ? style.activeButton : ''}>
					Posts
				</button>
				<button onClick={() => setSelectedTab('stories')}
				        className={selectedTab === 'stories' ? style.activeButton : ''}>
					Stories
				</button>
			</div>

			{selectedTab === 'bio' && <ProfileBioComponent profile={profile}/>}
			{selectedTab === 'posts' && <ProfilePostsContainer/>}
			{selectedTab === 'stories' && <ProfileBioComponent profile={profile}/>}
		</div>
	);
};

export default ProfileComponent;