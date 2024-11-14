import React, {useEffect} from "react";
import ProfileComponent from "./ProfileComponent";
import {putPhoto, setUserProfile, setUserProfileStatus} from "../../../store/profileSlice";
import {useNavigate, useParams} from "react-router-dom";
import Preloader from "../../common/elements/Preloader";
import {getIsLoading, getProfilePage} from "../../../selectors/profileSelectors";
import {getAuthUserId} from "../../../selectors/authSelectors";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

interface ProfileContainerProps {
	userId?: string;
}

const ProfileContainer: React.FC<ProfileContainerProps> = React.memo(() => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {userId} = useParams();
	const authUserId = useAppSelector(getAuthUserId);
	const profilePage = useAppSelector(getProfilePage);
	const loading = useAppSelector(getIsLoading);

	const savePhoto = (file: File) => {
		dispatch(putPhoto(file));
	}

	useEffect(() => {
		const userIdUrl = userId && parseInt(userId) ? parseInt(userId, 10) : authUserId;
		if (!userIdUrl) {
			navigate("/login")
		} else {
			dispatch(setUserProfile(userIdUrl));
			dispatch(setUserProfileStatus(userIdUrl))
		}
	}, [userId, authUserId, dispatch, navigate]);

	if (loading) {
		return <Preloader/>;
	}

	return <ProfileComponent profilePage={profilePage}
	                         isOwner={!userId}
	                         savePhoto={savePhoto}
	                         authUserId={authUserId}/>;
})

export default ProfileContainer;