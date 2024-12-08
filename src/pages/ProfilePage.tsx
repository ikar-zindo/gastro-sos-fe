import React, {useEffect} from "react";
import ProfileComponent from "../components/main/profile/ProfileComponent";
import {setUserProfileThunk, setUserProfileStatusThunk} from "../store/profile-slice";
import {useNavigate, useParams} from "react-router-dom";
import Preloader from "../components/common/elements/Preloader";
import {selectIsLoading, selectProfilePage} from "../selectors/profile-selectors";
import {selectAuthUserId} from "../selectors/auth-selectors";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {selectProfilePosts} from "../selectors/profile-posts-selectors";
import {globalErrorMessages} from "../utils/global-error-messages";
import {setGlobalError} from "../store/app-slice";

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
			dispatch(setUserProfileThunk(userIdUrl));
			dispatch(setUserProfileStatusThunk(userIdUrl));
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