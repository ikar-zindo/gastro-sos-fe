import React, {useState} from 'react';
import Preloader from "../../../common/elements/Preloader";
import style from "../../../../styles/main/profile/ProfileBio.module.css";
import ProfileBioElement from "./ProfileBioElement";
import ProfileDataForm from "../../../common/elements/ProfileDataForm";
import {locate} from "../../../../utils/locates/locate";
import {putProfileInfoThunk} from "../../../../store/profile-slice";
import {useAppDispatch} from "../../../../hooks/hooks";
import {ProfileInfoInterface, UpdateProfileInfoInterface} from "../../../../types/interfaces/profile-interfaces";

interface ProfileBioComponentProps {
	profile: ProfileInfoInterface | null;
	isOwner: boolean;
}

const ProfileBioComponent: React.FC<ProfileBioComponentProps> = ({ profile, isOwner }) => {
	const dispatch = useAppDispatch();
	const buttonValue = locate.profile.buttonEditProfile;
	const buttonSave = locate.profile.buttonSave;
	const [editMode, setEditMode] = useState<boolean>(false);

	if (!profile) {
		return <Preloader/>
	}

	const saveProfileInfo = (data: UpdateProfileInfoInterface) => {
		return dispatch(putProfileInfoThunk(data));
	}

	return (
		<div className={style.profileBio}>
			{/*{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}*/}

			{editMode
				? <ProfileDataForm profile={profile}
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