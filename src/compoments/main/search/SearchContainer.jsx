import React from 'react';
import c from '../../../styles/main/search.module.css'
import UsersContainer from "../user/UsersContainer.jsx";

const SearchContainer = () => {
	return (
		<div className={c.search}>
			<UsersContainer />
		</div>
	);
};

export default SearchContainer;