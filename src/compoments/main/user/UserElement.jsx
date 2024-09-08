import React from 'react';
import c from '../../../styles/main/users/Users.module.css'

const UserElement = (props) => {
	const user = props.user

	return (
		<div className={c.userInfo}>
			<img alt='ava' src={user.ava}/>

			<div className={c.userInfoWrapper}>
				<p className={c.userName}>{user.name}</p>
			</div>
		</div>
	);
};

export default UserElement;