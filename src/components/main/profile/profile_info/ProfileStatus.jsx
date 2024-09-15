import React, {useEffect, useRef, useState} from 'react';
import style from "../../../../styles/main/profile/profile.module.css";
import {useDispatch} from "react-redux";
import {updateUserProfileStatus} from "../../../../redux/profile-reducer.js";

const ProfileStatus = (props) => {
	const dispatch = useDispatch();
	const [editMode, setMode] = useState(false);
	const [status, setStatus] = useState(props.status || "");
	const [initialStatus, setInitialStatus] = useState(props.status || "");
	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		if (props.status !== status) {
			setStatus(props.status);
			setInitialStatus(props.status);
		}
	}, [props.status]);


	const onStatusChange = (event) => {
		setStatus(event.target.value);
	}

	const onStatusSave = () => {
		setIsSaving(true);
		dispatch(updateUserProfileStatus(status));
		setMode(false);
		setInitialStatus(status);
		setIsSaving(false);
	}

	const onStatusSaveClick = () => {
		onStatusSave();
	}

	const onEnterPress = (event) => {
		if (event.key === 'Enter') {
			onStatusSave();
		}
	}

	const activateEditMode = () => {
		if (!isSaving) {
			setMode(true);
			setStatus(props.status)
		}
	}

	const deactivateEditMode = () => {
		setStatus(initialStatus);
		setMode(false);
	}

	return (
		<>
			{!editMode
				? (<div>
					<span className={style.profileStatus} onDoubleClick={activateEditMode}>
						{status || "No status"}
					</span>
				</div>)
				: (<div className={style.editStatus}>
					<input
						onChange={onStatusChange}
						onBlur={deactivateEditMode}
						autoFocus={true}
						onKeyDown={onEnterPress}
						value={status}></input>
					<button onMouseDown={onStatusSaveClick}>Save</button>
				</div>)}
		</>
	);
};

export default ProfileStatus;