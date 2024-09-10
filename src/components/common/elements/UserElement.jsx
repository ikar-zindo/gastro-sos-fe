import React from 'react';
import styles from '../../../styles/main/users.module.css';
import userPhoto from '../../../assets/img/userPhoto.png';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {follow, toggleFollowingInProgress, unfollow} from "../../../redux/users-reducer.js";
import {FollowAPI} from "../../../api/FollowAPI.js";

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
					// Unfollow
					? <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
						dispatch(toggleFollowingInProgress(true, user.id)); // in progress on
						FollowAPI.unfollowUser(user.id).then(data => {
							if (data.resultCode === 0) {
								dispatch(unfollow(user.id));
							}
							dispatch(toggleFollowingInProgress(false, user.id)); // in progress off
						});
					}}>Unfollow</button>

					// Follow
					: <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
						dispatch(toggleFollowingInProgress(true, user.id)); // in progress on
						FollowAPI.followUser(user.id).then(data => {
							if (data.resultCode === 0) {
								dispatch(follow(user.id));
							}
							dispatch(toggleFollowingInProgress(false, user.id)); // in progress off
						});
					}}>Follow</button>}
			</div>
		</div>
	);
};

export default UserElement;