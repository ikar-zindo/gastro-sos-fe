import React from 'react';
import c from '../../../styles/main/users/Users.module.css';
import axios from "axios";

const UserComponent = (props) => {
	let users = props.users;


	let getUsers = () =>
	{
		if (props.users.length === 0) {
					// debugger
			axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
					// debugger
					console.log(response);
					props.setUsers(response);
				});
		}
	}

	let usersElements = users.map(user => (
			<div className={c.userInfo}>
				<div className={c.img}>
					<img alt='ava' src={user.imgUrl}/>
				</div>

				<div className={c.userInfoWrapper}>
					<div className={c.userNameWrapper}>
						<p className={c.userName}>{user.name}</p>
						<p className={c.status}>{user.status}</p>
					</div>

					<div className={c.userLocation}>
						<p className={c.city}>{user.location.city}</p>
						<p className={c.country}>{user.location.country}</p>
					</div>
				</div>

				<div className={c.button}>
					{user.following
						? <button onClick={() => {
							props.unfollow(user.id)
						}}>Unfollow</button>
						: <button onClick={() => {
							props.follow(user.id)
						}}>Follow</button>}
				</div>
			</div>
		)
	)

	return (
		<div>
			<button onClick={getUsers}>Get Users</button>
			{usersElements ? usersElements : (<div className='loading'>Loading...</div>)}
		</div>
	);
};

export default UserComponent;