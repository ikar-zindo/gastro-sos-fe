import React from 'react';
import styles from '../../../styles/main/users.module.css';
import userPhoto from '../../../assets/img/userPhoto.png';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {follow, unfollow} from "../../../redux/users-reducer.js";

const UserElement = (props) => {
	const dispatch = useDispatch();
	let user = props.user;

	return (
		<div key={user.id} className={styles.userInfoWrapper}>
			<NavLink to={"/profile/" + user.id}>
				<div className={styles.img}>
					<img alt='ava' src={user.photos.small != null ? user.photos.small : userPhoto}/>
				</div>
			</NavLink>

			<div className={styles.userInfo}>
				<div className={styles.userNameWrapper}>
					<p className={styles.userName}>{user.name}</p>
					<p className={styles.status}>{user.status}</p>

					<p className={styles.city}>{"user.location.city"}</p>
					<p className={styles.country}>{"user.location.country"}</p>
				</div>
			</div>

			<div className={styles.button}>
				{user.followed
					? <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
						dispatch(unfollow(user.id));
					}}>Unfollow</button>
					: <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
						dispatch(follow(user.id));
					}}>Follow</button>}
			</div>
		</div>
	);
};

export default UserElement;