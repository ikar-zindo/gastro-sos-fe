import React, {useEffect} from "react";
import ProfileComponent from "./ProfileComponent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfile, setUserProfileStatus} from "../../../redux/profile-reducer.js";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../../common/elements/Loader.jsx";

const ProfileContainer = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {userId} = useParams();
	const authUserId = useSelector(state => state.auth.id);
	const profilePage = useSelector(state => state.profilePage);
	const loading = useSelector(state => state.profilePage.loading);

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

	return <ProfileComponent profilePage={profilePage}/>;
}

export default ProfileContainer;