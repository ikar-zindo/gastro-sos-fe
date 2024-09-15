import React, {useState} from 'react';
import style from "../../../../styles/main/profile/profile.module.css";

const ProfileStatus = (props) => {
	const [editMode, setMode] = useState(false);

	const activateEditMode = () => {
		setMode(true);
	}

	const deactivateEditMode = () => {
		setMode(false);
	}

	return (
		<>
			{!editMode
				? (<div>
					<span className={style.profileStatus} onDoubleClick={activateEditMode}>{props.status}</span>
				</div>)
				: (<div className={style.editStatus}>
					<input autoFocus={true} onBlur={deactivateEditMode} value={props.status}></input>
					<button>Save</button>
				</div>)}
		</>
	);
};

export default ProfileStatus;