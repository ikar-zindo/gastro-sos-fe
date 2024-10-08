import React from 'react';
import style from "../../../../styles/main/profile/profile.module.css";

const ProfileStatusForm = (props) => {
	return <form onSubmit={props.onSubmit} className={style.editStatus}>
		<input
			type={"text"}
			{...props.register}
			onBlur={props.onBlur}
			autoFocus={true}/>
		<div>
			<input className={style.button}
			       type="submit"
			       value="Save"
			       onMouseDown={props.onMouseDown}/>
		</div>
	</form>;
}

export default ProfileStatusForm;