import React from 'react';
import UserElement from "../../common/elements/UserElement.jsx";
import style from '../../../styles/main/users.module.css';
import Loader from "../../common/elements/Loader.jsx";
import Paginator from "../../common/elements/Paginator.jsx";

const UsersComponent = (props) => {
	const portionSize = 10;

	let usersElements = props.users.map(user => (
		<UserElement
			key={user.id}
			user={user}
			isFollowingInProgress={props.isFollowingInProgress}/>
	));

	return (
		<div className={style.usersWrapper}>
			<Paginator totalItemsCount={props.totalUsers}
			           pageSize={props.pageSize}
			           currentPage={props.currentPage}
			           currentPortion={props.currentPortion}
			           onUpdatePageClick={props.onUpdatePageClick}
			           onUpdatePortionClick={props.onUpdatePortionClick}
			           portionSize={portionSize}/>

			{props.isFetching ? <Loader/> : usersElements}
		</div>
	);
};

export default UsersComponent;