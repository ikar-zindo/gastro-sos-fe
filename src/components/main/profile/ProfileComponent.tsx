import React, {useEffect} from 'react';
import ProfilePostsContainer from "./profile_posts/ProfilePostsContainer";
import ProfileInfoComponent from "./profile_info/ProfileInfoComponent";
import style from "../../../styles/main/profile/Profile.module.css";
import ProfileBioContainer from "./profile_bio/ProfileBioComponent";
import {useAppDispatch} from "../../../hooks/hooks";
import {setSelectedTab} from "../../../store/profile-slice";
import {ProfilePostsState, ProfileState, ProfileTab} from "../../../types/interfaces/profile-interfaces";
import {useParams} from "react-router-dom";

interface ProfileComponentProps {
	profilePage: ProfileState;
	isOwner: boolean;
	authUserId: number | string | null;
	profilePostContentPage: ProfilePostsState;
}

const ProfileComponent: React.FC<ProfileComponentProps> = React.memo(props => {
	const profilePage = props.profilePage;
	const profile = profilePage.profile;
	const selectedTab = profilePage.selectedTab;
	const dispatch = useAppDispatch();
	const { userId: userIdFromUrl } = useParams();

	useEffect(() => {
		if (userIdFromUrl === undefined) {
			return;
		}
		if ((userIdFromUrl !== props.authUserId)) {
			dispatch(setSelectedTab(ProfileTab.Bio));
		}
	}, [userIdFromUrl, props.authUserId, dispatch]);

	return (
		<div className={style.profile}>
			<ProfileInfoComponent profilePage={profilePage}/>

			<div className={style.switchButtons}>
				<button onClick={() => dispatch(setSelectedTab(ProfileTab.Bio))}
				        className={selectedTab === ProfileTab.Bio ? style.activeButton : ''}>
					Bio
				</button>
				<button onClick={() => dispatch(setSelectedTab(ProfileTab.Posts))}
				        className={selectedTab === ProfileTab.Posts ? style.activeButton : ''}>
					Posts
				</button>
				<button onClick={() => dispatch(setSelectedTab(ProfileTab.Stories))}
				        className={selectedTab === ProfileTab.Stories ? style.activeButton : ''}>
					Stories
				</button>
			</div>

			{selectedTab === 'bio' && <ProfileBioContainer isOwner={props.isOwner}
			                                               profile={profile}/>}
			{selectedTab === 'posts' && <ProfilePostsContainer isOwner={props.isOwner}
			                                                   profilePostContentPage={props.profilePostContentPage}/>}
			{selectedTab === 'stories' && <ProfileBioContainer isOwner={props.isOwner}
			                                                   profile={profile}/>}
		</div>
	);
});

export default ProfileComponent;