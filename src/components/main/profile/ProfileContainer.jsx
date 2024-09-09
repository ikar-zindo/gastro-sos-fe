import React, {useEffect} from "react";
import ProfileComponent from "./ProfileComponent.jsx";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer.js";
import {useNavigate, useParams} from "react-router-dom";

const ProfileContainer = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {userId} = useParams();
	const profile = useSelector(state => state.profilePage.profile);

	useEffect(() => {
		const userIdUrl = parseInt(userId) ? parseInt(userId, 10) : 31642;
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/profile/${userIdUrl}`)
			.then(response => {
				dispatch(setUserProfile(response.data));
			})
			.catch(error => {
				console.error('Failed to fetch profile:', error);
				navigate('/error');
			});
	}, [userId, dispatch, navigate]);

	return <ProfileComponent profile={profile}/>;
}

export default ProfileContainer;