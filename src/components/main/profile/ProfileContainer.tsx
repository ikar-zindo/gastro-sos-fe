import React, {useEffect} from "react";
import ProfileComponent from "./ProfileComponent";
import {setUserProfile, setUserProfileStatus} from "../../../store/profileSlice";
import {useNavigate, useParams} from "react-router-dom";
import Preloader from "../../common/elements/Preloader";
import {getIsLoading, getProfilePage} from "../../../selectors/profileSelectors";
import {getAuthUserId} from "../../../selectors/authSelectors";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {getProfilePosts} from "../../../selectors/profilePostsSelectors";
import {globalErrorMessages} from "../../../utils/global-error-messages";
import {setGlobalError} from "../../../store/appSlice.ts";

interface ProfileContainerProps {
	userId?: string;
}

const ProfileContainer: React.FC<ProfileContainerProps> = React.memo(() => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {userId} = useParams<string>();
	const authUserId = useAppSelector(getAuthUserId);
	const profilePage = useAppSelector(getProfilePage);
	const loading = useAppSelector(getIsLoading);
	const profilePostContentPage = useAppSelector(getProfilePosts);

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

export default ProfileContainer;