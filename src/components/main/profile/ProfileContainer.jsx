import React, {useEffect} from "react";
import ProfileComponent from "./ProfileComponent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {putPhoto, setUserProfile, setUserProfileStatus} from "../../../redux/profile-reducer.js";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../../common/elements/Loader.jsx";
import {getIsLoading, getProfilePage} from "../../../selectors/profile-selectors.js";
import {getAuthUserId} from "../../../selectors/auth-selectors.js";

const ProfileContainer = React.memo(() => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {userId} = useParams();
	const authUserId = useSelector(getAuthUserId);
	const profilePage = useSelector(getProfilePage);
	const loading = useSelector(getIsLoading);

	const savePhoto = (file) => {
		dispatch(putPhoto(file));
	}

	useEffect(() => {
		const userIdUrl = parseInt(userId) ? parseInt(userId, 10) : authUserId;
		if (!userIdUrl) {
			navigate("/login")
		}

		dispatch(setUserProfile(userIdUrl));
		dispatch(setUserProfileStatus(userIdUrl))
	}, [userId, authUserId, dispatch]);

	if (loading) {
		return <Loader/>;
	}

	return <ProfileComponent profilePage={profilePage}
	                         isOwner={!userId}
	                         savePhoto={savePhoto}/>;
})

export default ProfileContainer;