import React from 'react';
import UserElement from "../../common/elements/UserElement.jsx";
import style from '../../../styles/main/users.module.css';
import PreloaderElement from "../../common/elements/PreloaderElement.jsx";

const UsersComponent = (props) => {
	let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let usersElements = props.users.map(user => (
		<UserElement
			key={user.id}
			user={user}
			isFollowingInProgress={props.isFollowingInProgress}/>
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

			{props.isFetching ? <PreloaderElement/> : usersElements}
			{/*{usersElements ? usersElements : (<PreloaderElement/>)}*/}
		</div>
	);

};

export default UsersComponent;