import React from 'react';
import styles from '../../../styles/main/users.module.css';
import userPhoto from '../../../assets/img/userPhoto.png';
import preloader from "../../../assets/img/preloader.svg";
import Preloader from "../../common/Preloader.jsx";

const UserElement = (props) => {
	let user = props.user;
	return (
		<>
			{props.isFetching ? <Preloader/> : null}
			<div key={user.id} className={styles.userInfoWrapper}>
				<div className={styles.img}>
					<img alt='ava' src={user.photos.small != null ? user.photos.small : userPhoto}/>
				</div>

				<div className={styles.userInfo}>
					<div className={styles.userNameWrapper}>
						<p className={styles.userName}>{user.name}</p>
						<p className={styles.status}>{user.status}</p>

						<p className={styles.city}>{"user.location.city"}</p>
						<p className={styles.country}>{"user.location.country"}</p>
					</div>
				</div>

				<div className={styles.button}>
					{user.following
						? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
						: <button onClick={() => props.follow(user.id)}>Follow</button>}
				</div>
			</div>
		</>
	);
};

export default UserElement;