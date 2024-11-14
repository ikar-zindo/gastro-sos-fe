import React from "react";
import UserElement from "../../common/elements/UserElement";
import style from '../../../styles/main/users.module.css';
import Preloader from "../../common/elements/Preloader";
import Paginator from "../../common/elements/Paginator";
import {UserInterface} from "../../../types/userInterfaces";

interface UsersComponentProps {
	users: Array<UserInterface>;
	followingInProgress: Array<number | string>;
	isFetching: boolean;
	totalUsers: number;
	pageSize: number;
	currentPage: number;
	portionNumber: number;
	onUpdatePageClick: (page: number) => void;
	onUpdatePortionClick: (portion: number) => void;
	portionSize: number;
}

const UsersComponent: React.FC<UsersComponentProps> = (props) => {
	let usersElements = props.users.map(user => (
		<UserElement
			key={user.id}
			user={user}
			isFollowingInProgress={props.followingInProgress}/>
	));

	return (
		<div className={style.usersWrapper}>
			<Paginator totalItemsCount={props.totalUsers}
			           pageSize={props.pageSize}
			           currentPage={props.currentPage}
			           portionNumber={props.portionNumber}
			           onUpdatePageClick={props.onUpdatePageClick}
			           onUpdatePortionClick={props.onUpdatePortionClick}
			           portionSize={props.portionSize}/>

			{props.isFetching ? <Preloader/> : usersElements}
		</div>
	);
};

export default UsersComponent;