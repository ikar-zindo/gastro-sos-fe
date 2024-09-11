import React, {useEffect} from "react";
import ProfileComponent from "./ProfileComponent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer.js";
import {useNavigate, useParams} from "react-router-dom";

const ProfileContainer = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {userId} = useParams();
	const profile = useSelector(state => state.profilePage.profile);
	const authUserId = useSelector(state => state.auth.id);

	useEffect(() => {
		const userIdUrl = parseInt(userId) ? parseInt(userId, 10) : authUserId;
		dispatch(setUserProfile(userIdUrl));
	}, [userId, authUserId, dispatch, navigate]);

	return <ProfileComponent profile={profile}/>;
}

export default ProfileContainer;