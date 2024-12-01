import React, {useEffect} from "react";
import UserElement from "../../common/elements/UserElement";
import style from '../../../styles/main/Users.module.css';
import Preloader from "../../common/elements/Preloader";
import Paginator from "../../common/elements/Paginator";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterForm, requestUsers, setCurrentPortionAction} from "../../../store/users-slice";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {
	getCurrentPage,
	getCurrentPortion,
	getFilterForm,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getPortionSize,
	getTotalUsers,
	getUsers
} from "../../../selectors/users-selectors";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';

type QueryParamsType = { term?: string; page?: string; friend?: string }

const UsersContainer: React.FC = React.memo(() => {
	const users = useAppSelector(getUsers);
	const pageSize = useAppSelector(getPageSize);
	const totalUsers = useAppSelector(getTotalUsers);
	const currentPage = useAppSelector(getCurrentPage);
	const currentPortion = useAppSelector(getCurrentPortion);
	const isFetching = useAppSelector(getIsFetching);
	const followingInProgress = useAppSelector(getFollowingInProgress);
	const portionSize = useAppSelector(getPortionSize);
	const filter = useAppSelector(getFilterForm);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const parsed = queryString.parse(location.search) as QueryParamsType;
		let actualPage = currentPage;
		let actualFilter = filter;

		if (parsed.page) actualPage = Number(parsed.page);
		if (parsed.term) actualFilter = {...actualFilter, term: parsed.term};

		if (parsed.friend) {
			switch (parsed.friend) {
				case 'null':
					actualFilter = {...actualFilter, friend: null};
					break;
				case 'true':
					actualFilter = {...actualFilter, friend: true};
					break;
				case 'false':
					actualFilter = {...actualFilter, friend: false};
					break;
			}
		}

		if (parsed.friend) {
			switch (parsed.friend) {
				case "null":
					actualFilter = {...actualFilter, friend: null};
					break;
				case "true":

			}
		}

		dispatch(requestUsers(actualPage, pageSize, actualFilter));
	}, []);

	useEffect(() => {
		const query: QueryParamsType = {};

		if (filter.term) query.term = filter.term;
		if (filter.friend !== null) query.friend = String(filter.friend);
		if (currentPage !== 1) query.page = String(currentPage);

		navigate({
			pathname: '/search',
			search: queryString.stringify(query),
		});
	}, [filter, currentPage]);

	const onUpdatePageClick = (pageNumber: number) => {
		dispatch(requestUsers(pageNumber, pageSize, filter));
	};

	const onUpdatePortionClick = (portionNumber: number) => {
		dispatch(setCurrentPortionAction(portionNumber));
	};

	const onFilterChange = (filter: FilterForm) => {
		dispatch(setCurrentPortionAction(1));
		dispatch(requestUsers(1, pageSize, filter));
	}

	let usersElements = users.map(user => (
		<UserElement
			key={user.id}
			user={user}
			isFollowingInProgress={followingInProgress}/>
	));

	return (
		<div className={style.usersWrapper}>
			<UsersSearchForm onFilterChange={onFilterChange}/>

			<Paginator totalItemsCount={totalUsers}
			           pageSize={pageSize}
			           currentPage={currentPage}
			           currentPortion={currentPortion}
			           onUpdatePageClick={onUpdatePageClick}
			           onUpdatePortionClick={onUpdatePortionClick}
			           portionSize={portionSize}/>

			{isFetching ? <Preloader/> : usersElements}
		</div>
	);
});

export default UsersContainer;