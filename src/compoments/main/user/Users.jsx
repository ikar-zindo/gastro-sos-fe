import React from 'react';
import UserElement from "./UserElement.jsx";
import style from '../../../styles/main/users.module.css';

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let usersElements = props.users.map(user => (
		<UserElement
			user={user}
			unfollow={props.unfollow}
			follow={props.follow}/>
	));

	return (
		<div className={style.usersWrapper}>
			<div className={style.pagination}>
				{pages.map(page => {
					return <span key={page} className={props.currentPage === page ? style.selectPage : ""}
					             onClick={() => {
						             props.onUpdatePageClick(page);
					             }}>{page}</span>
				})}
			</div>

			 {usersElements ? usersElements : (<div className='loading'>Loading...</div>)}

		</div>
	);

};

export default Users;