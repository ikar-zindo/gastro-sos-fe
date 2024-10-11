import React from 'react';
import UserElement from "../../common/elements/UserElement.jsx";
import style from '../../../styles/main/users.module.css';
import Loader from "../../common/elements/Loader.jsx";
import Paginator from "../../common/elements/Paginator.jsx";

const UsersComponent = (props) => {
	let usersElements = props.users.map(user => (
		<UserElement
			key={user.id}
			user={user}
			isFollowingInProgress={props.isFollowingInProgress}/>
	));

	return props.isFetching
		? <Loader/>
		: <div className={style.usersWrapper}>
			<Paginator totalUsers={props.totalUsers}
			           pageSize={props.pageSize}
			           currentPage={props.currentPage}
			           onUpdatePageClick={props.onUpdatePageClick}/>

			{usersElements}
		</div>;
};

export default UsersComponent;