import React, {useEffect, useRef, useState} from 'react';
import style from "../../../../styles/main/profile/profile.module.css";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {updateUserProfileStatus} from "../../../../redux/profile-reducer.js";

const ProfileStatus = (props) => {
	const dispatch = useDispatch();
	const [initialStatus, setInitialStatus] = useState(props.status || "");
	const [editMode, setEditMode] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: {
			errors,
		}
	} = useForm({
		defaultValues: {
			status: props.status || ""
		}
	});
	const status = watch("status");

	useEffect(() => {
		if (props.status !== status) {
			setValue("status", props.status);
			setInitialStatus(props.status);
		}

	}, [props.status, setValue]);

	const onSubmit = (data) => {
		console.log(data.status)
		setIsSaving(true);
		dispatch(updateUserProfileStatus(data.status));
		setEditMode(false);
		setInitialStatus(data.status);
		setIsSaving(false);
	};

	const activateEditMode = () => {
		if (!isSaving) {
			setEditMode(true);
			setValue("status", props.status)
		}
	};

	const deactivateEditMode = () => {
		setValue("status", initialStatus);
		setEditMode(false);
	};

	const [isLongPress, setIsLongPress] = useState(false);
	const timeoutRef = useRef(null);

	const startPressTimer = () => {
		timeoutRef.current = setTimeout(() => {
			setIsLongPress(true);
			activateEditMode();
		}, 800); // time for long-term experience
	};

	const cancelPressTimer = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setIsLongPress(false);
	};

	const handleTouchStart = () => {
		startPressTimer();
	};

	const handleTouchEnd = () => {
		if (!isLongPress) {
		}
		cancelPressTimer();
	};

	return (
		<>
			{!editMode
				? (<div onTouchStart={handleTouchStart}
				        onTouchEnd={handleTouchEnd}
				        onTouchCancel={cancelPressTimer}>
					<span className={style.profileStatus} onDoubleClick={activateEditMode}>
						{status}
					</span>
				</div>)
				: (<form onSubmit={handleSubmit(onSubmit)} className={style.editStatus}>
					<input
						type={"text"}
						{...register("status")}
						onBlur={deactivateEditMode}
						autoFocus={true}/>
					<div>
						<input className={style.button}
						       type="submit"
						       value="Save"
						       onMouseDown={(e) => e.preventDefault()}/>
					</div>
				</form>)}
		</>
	);
};

export default ProfileStatus;