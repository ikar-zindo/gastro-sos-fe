import React, {useEffect} from "react";
import ProfileComponent from "./ProfileComponent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer.js";
import {useNavigate, useParams} from "react-router-dom";
import {ProfileAPI} from "../../../api/ProfileAPI.js";

const ProfileContainer = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {userId} = useParams();
	const profile = useSelector(state => state.profilePage.profile);

	useEffect(() => {
		const userIdUrl = parseInt(userId) ? parseInt(userId, 10) : 31642;
		ProfileAPI.getProfile(userIdUrl).then(data => {
				dispatch(setUserProfile(data));
			})
			.catch(error => {
				navigate('/error');
			});
	}, [userId, dispatch, navigate]);

	return <ProfileComponent profile={profile}/>;
}

export default ProfileContainer;