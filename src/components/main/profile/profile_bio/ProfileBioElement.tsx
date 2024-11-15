import React from 'react';
import style from "../../../../styles/main/profile/profileBio.module.css";
import workBag from "../../../../assets/img/icons/work-bag.svg"
import XSquare from "../../../../assets/img/icons/x-square-close-delete.svg"
import Contact from "../../../common/elements/Contact";
import {ProfileInfoInterface} from "../../../../types/interfaces/profileInterfaces";

interface ProfileBioElementProps {
	profile: ProfileInfoInterface;
	isOwner: boolean;
	buttonValue: string;
	switchEditMode: () => void;
}

const ProfileBioElement: React.FC<ProfileBioElementProps> = ({profile, isOwner, buttonValue, switchEditMode}) => {
	return <div className={style.aboutMe}>
		<div className={style.aboutMeBlock}>
			<b className={style.description}>About me:</b>{profile.aboutMe}
		</div>

		<div className={style.aboutMeBlock}>
			<b className={style.description}>Looking for a job:</b>{profile.lookingForAJob ? (
			<img className={style.img} src={workBag} alt="yes"/>
		) : (
			<img className={style.img} src={XSquare} alt="no"/>
		)}
		</div>

		<div className={style.aboutMeBlock}>
			<b className={style.description}>My way: </b>{profile.lookingForAJobDescription}
		</div>

		<div className={style.contacts}>
			<b>Contacts</b>
			{profile.contacts && Object.keys(profile.contacts).map(key => {
				return <Contact key={key}
				                contactTitle={key}
				                contactValue={profile.contacts[key]}/>
			}
		)}
		</div>

		{isOwner && <div className={style.aboutMeBlock}>
			<div className={style.button}>
			<button onClick={switchEditMode}>{buttonValue}</button>
		</div></div>}
	</div>;
}

export default ProfileBioElement;