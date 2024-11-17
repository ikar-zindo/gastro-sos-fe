import React from 'react';
import styles from '../../../styles/main/users.module.css';
// @ts-ignore
import userPhoto from '../../../assets/img/userPhoto.png';
import {NavLink} from "react-router-dom";
import {follow, unfollow} from "../../../store/users-slice";
import {useAppDispatch} from "../../../hooks/hooks";
import {UserInterface} from "../../../types/interfaces/user-interfaces";

type UserElementProps = {
	user: UserInterface;
	isFollowingInProgress: (number | string)[];
};

const UserElement: React.FC<UserElementProps> = ({user, isFollowingInProgress}) => {
	const dispatch = useAppDispatch();

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

					<p className={styles.city}>{user.location?.city}</p>
					<p className={styles.country}>{user.location?.country}</p>
				</div>
			</div>

			<div className={styles.button}>
				{user.followed
					? <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
						dispatch(unfollow(user.id));
					}}>Unfollow</button>
					: <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
						dispatch(follow(user.id));
					}}>Follow</button>}
			</div>
		</div>
	);
};

export default UserElement;