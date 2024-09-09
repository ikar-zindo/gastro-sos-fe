import React from 'react';
import c from '../../../styles/main/users.module.css';
import axios from "axios";
import userPhoto from '../../../assets/img/userPhoto.png'
import style from "../../../styles/main/users.module.css";
import UserElement from "./UserElement.jsx";

const UserComponent = (props) => {
	let users = props.users;
		if (props.users.length === 0) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
					props.setUsers(response.data.items);
				});
			axios.get(
				'https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					props.setTotalUsers(response.data.totalCount);
				});
		}

	let onUpdatePageClick = (page) => {
		props.setCurrentPage(page);
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.pageSize}`)
			.then(response => {
				props.setUsers(response.data.items);
			});
	};

	let usersElements = users.map(user => (
		<UserElement
			user={user}
			unfollow={props.unfollow}
			follow={props.follow}/>
		)
	);

	let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={c.usersWrapper}>
			<div className={style.pagination}>
				{pages.map(page => {
					return <span key={page} className={props.currentPage === page ? style.selectPage : ""}
					             onClick={() => {
						             onUpdatePageClick(page);
					             }}>{page}</span>
				})}
			</div>

			{usersElements ? usersElements : (<div className='loading'>Loading...</div>)}
		</div>
	);
};

export default UserComponent;