import React from 'react';
import UserComponent from "../../common/UserComponent.jsx";
import style from '../../../styles/main/users.module.css';
import PreloaderComponent from "../../common/PreloaderComponent.jsx";

const UsersComponent = (props) => {
	let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let usersElements = props.users.map(user => (
		<UserComponent key={user.id} user={user}/>
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

			{props.isFetching ? <PreloaderComponent/> : usersElements}
			 {/*{usersElements ? usersElements : (<PreloaderComponent/>)}*/}
		</div>
	);

};

export default UsersComponent;