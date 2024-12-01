import React from 'react';
import c from '../../../styles/main/Search.module.css'
import UsersContainer from "../user/UsersContainer";

export const SearchContainer: React.FC = () => {
	return (
		<div className={c.search}>
			<UsersContainer/>
		</div>
	);
};

export default SearchContainer;