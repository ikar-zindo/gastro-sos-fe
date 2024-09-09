import React, { useState, useEffect } from 'react';
import c from '../../../styles/main/users/Users.module.css';
import axios from 'axios';
import userPhoto from '../../../assets/img/userPhoto.png';
import style from "../../../styles/main/users/Users.module.css";

const UserFunction = (props) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					props.setUsers(response.data.items);
				});
		}
	}, [props.users]);

	return (
		<div className={c.userWrapper}>
			<div className={style.pagination}>
				<span>1</span>
				<span className={style.selectPage}>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
			</div>

			{props.users.map(user => (
				<div key={user.id} className={c.userInfo}>
					<div className={c.img}>
						<img alt='ava' src={user.photos.small != null ? user.photos.small : userPhoto}/>
					</div>

					<div className={c.userInfoWrapper}>
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
			))}
		</div>
	);
};

export default UserFunction;
