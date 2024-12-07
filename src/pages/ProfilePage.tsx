import React, {useEffect} from "react";
import ProfileComponent from "../components/main/profile/ProfileComponent.tsx";
import {setUserProfile, setUserProfileStatus} from "../store/profile-slice.ts";
import {useNavigate, useParams} from "react-router-dom";
import Preloader from "../components/common/elements/Preloader.tsx";
import {selectIsLoading, selectProfilePage} from "../selectors/profile-selectors.ts";
import {selectAuthUserId} from "../selectors/auth-selectors.ts";
import {useAppDispatch, useAppSelector} from "../hooks/hooks.ts";
import {selectProfilePosts} from "../selectors/profile-posts-selectors.ts";
import {globalErrorMessages} from "../utils/global-error-messages.ts";
import {setGlobalError} from "../store/app-slice.ts";

interface ProfileContainerProps {
	userId?: string;
}

const ProfilePage: React.FC<ProfileContainerProps> = React.memo(() => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {userId} = useParams<string>();
	const authUserId = useAppSelector(selectAuthUserId);
	const profilePage = useAppSelector(selectProfilePage);
	const loading = useAppSelector(selectIsLoading);
	const profilePostContentPage = useAppSelector(selectProfilePosts);

	useEffect(() => {
		const userIdUrl = userId && parseInt(userId) ? parseInt(userId, 10) : authUserId;
		if (!userIdUrl) {
			dispatch(setGlobalError({
				code: "ID_NOT_EXISTS",
				message: globalErrorMessages.ID_NOT_EXISTS,
				status: 400,
			}));
		} else if (!profilePage.profile || profilePage.profile.userId !== userIdUrl) {
			dispatch(setUserProfile(userIdUrl));
			dispatch(setUserProfileStatus(userIdUrl));
		}
	}, [userId, authUserId, dispatch, navigate]);

	if (loading) {
		return <Preloader/>;
	}

	return <ProfileComponent profilePage={profilePage}
	                         isOwner={!userId}
	                         authUserId={authUserId}
	                         profilePostContentPage={profilePostContentPage}/>;
})

export default ProfilePage;