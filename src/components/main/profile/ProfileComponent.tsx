import React, {useEffect} from 'react';
import ProfilePostsContainer from "./profile_posts/ProfilePostsContainer";
import ProfileInfoComponent from "./profile_info/ProfileInfoComponent";
import style from "../../../styles/main/profile/profile.module.css";
import ProfileBioContainer from "./profile_bio/ProfileBioComponent";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {setSelectedTab} from "../../../store/profileSlice";
import {ProfileState, ProfileTab} from "../../../types/interfaces/profileInterfaces";
import {useParams} from "react-router-dom";
import {getProfilePosts} from "../../../selectors/profilePostsSelectors";

interface ProfileComponentProps {
	profilePage: ProfileState;
	savePhoto: (file: File) => void;
	isOwner: boolean;
	authUserId: number | string | null;
}

const ProfileComponent: React.FC<ProfileComponentProps> = React.memo(props => {
	const profilePage = props.profilePage;
	const profile = profilePage.profile;
	const selectedTab = profilePage.selectedTab;
	const profilePostContentPage = useAppSelector(getProfilePosts);
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
			<ProfileInfoComponent profilePage={profilePage}
			                      savePhoto={props.savePhoto}/>

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