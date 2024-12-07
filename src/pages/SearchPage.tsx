import React from 'react';
import c from '../styles/main/Search.module.css'
import UsersContainer from "../components/main/user/UsersContainer";

export const SearchPage: React.FC = React.memo(() => {
	return (
		<div className={c.search}>
			<UsersContainer/>
		</div>
	);
});

export default SearchPage;