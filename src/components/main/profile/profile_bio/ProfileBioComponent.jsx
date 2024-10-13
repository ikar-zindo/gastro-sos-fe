import React, {useState} from 'react';
import Loader from "../../../common/elements/Loader.jsx";
import style from "../../../../styles/main/profile/profileBio.module.css";
import ProfileBioElement from "./ProfileBioElement.jsx";
import ProfileDataForm from "../../../common/elements/ProfileDataForm.jsx";
import {locate} from "../../../../utils/locates/locate.js";
import {putProfileInfo} from "../../../../redux/profile-reducer.js";
import {useDispatch} from "react-redux";

const ProfileBioComponent = ({profile, isOwner}) => {
	const dispatch = useDispatch();
	const buttonValue = locate.profile.buttonEditProfile;
	const buttonSave = locate.profile.buttonSave;
	const [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Loader/>
	}

	const saveProfileInfo = (data) => {
		return dispatch(putProfileInfo(data));
	}

	return (
		<div className={style.profileBio}>
			{/*{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}*/}

			{editMode
				? <ProfileDataForm profile={profile}
				                   isOwner={isOwner}
				                   buttonSave={buttonSave}
				                   setEditMode={setEditMode}
				                   saveProfileInfo={saveProfileInfo}/>
				: <ProfileBioElement isOwner={isOwner}
				                     profile={profile}
				                     buttonValue={buttonValue}
				                     switchEditMode={() => {setEditMode(true)}}/>
			}
		</div>
	);
};

export default ProfileBioComponent;