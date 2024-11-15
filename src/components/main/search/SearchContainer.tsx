import React from 'react';
import c from '../../../styles/main/search.module.css'
import UsersContainer from "../user/UsersContainer";

const SearchContainer: React.FC = () => {
	return (
		<div className={c.search}>
			<UsersContainer />
		</div>
	);
};

export default SearchContainer;