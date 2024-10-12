import React, {useState} from 'react';
import ProfilePostsContainer from "./profile_posts/ProfilePostsContainer.jsx";
import ProfileInfoComponent from "./profile_info/ProfileInfoComponent.jsx";
import style from "../../../styles/main/profile/profile.module.css";
import ProfileBioContainer from "./profile_bio/ProfileBioComponent.jsx";
import {useSelector} from "react-redux";

const ProfileComponent = React.memo(props => {
	const profilePage = props.profilePage;
	const profile = profilePage.profile;
	const profilePostContentPage = useSelector(state => state.profilePostContentPage);
	const [selectedTab, setSelectedTab] = useState('bio');

	return (
		<div className={style.profile}>
			<ProfileInfoComponent profilePage={profilePage}/>

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

			{selectedTab === 'bio' && <ProfileBioContainer isOwner={props.isOwner}
			                                               profile={profile}
			                                               savePhoto={props.savePhoto}/>}
			{selectedTab === 'posts' && <ProfilePostsContainer isOwner={props.isOwner}
			                                                   profilePostContentPage={profilePostContentPage}/>}
			{selectedTab === 'stories' && <ProfileBioContainer isOwner={props.isOwner}
			                                                   profile={profile}
			                                                   savePhoto={props.savePhoto}/>}
		</div>
	);
});

export default ProfileComponent;