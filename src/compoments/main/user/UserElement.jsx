import React from 'react';
import c from '../../../styles/main/users.module.css';
import userPhoto from '../../../assets/img/userPhoto.png'

const UserElement = (props) => {
	let user = props.user;

	return (
		<div key={user.id} className={c.userInfoWrapper}>
			<div className={c.img}>
				<img alt='ava' src={user.photos.small != null ? user.photos.small : userPhoto}/>
			</div>

			<div className={c.userInfo}>
				<div className={c.userNameWrapper}>
					<p className={c.userName}>{user.name}</p>
					<p className={c.status}>{user.status}</p>

					<p className={c.city}>{"user.location.city"}</p>
					<p className={c.country}>{"user.location.country"}</p>
				</div>
			</div>

			<div className={c.button}>
				{user.following
					? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
					: <button onClick={() => props.follow(user.id)}>Follow</button>}
			</div>
		</div>
	);
};

export default UserElement;