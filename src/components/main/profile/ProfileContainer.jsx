import React, {useEffect} from "react";
import ProfileComponent from "./ProfileComponent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfile, setUserProfileStatus} from "../../../redux/profile-reducer.js";
import {useParams} from "react-router-dom";

const ProfileContainer = () => {
	const dispatch = useDispatch();
	const {userId} = useParams();
	const authUserId = useSelector(state => state.auth.id);
	const profilePage = useSelector(state => state.profilePage);

	useEffect(() => {
		const userIdUrl = parseInt(userId) ? parseInt(userId, 10) : authUserId;
		dispatch(setUserProfile(userIdUrl));
		dispatch(setUserProfileStatus(userIdUrl))
	}, [userId, authUserId, dispatch]);

	return <ProfileComponent profilePage={profilePage}/>;
}

export default ProfileContainer;