import React from 'react';
import style from '../../../styles/common/paginator.module.css';

const Paginator = ({totalUsers, pageSize, currentPage, onUpdatePageClick}) => {
	let pagesCount = Math.ceil(totalUsers / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={style.pagination}>
			{pages.map(page => {
				return <span key={page} className={currentPage === page ? style.selectPage : ""}
				             onClick={() => {
					             onUpdatePageClick(page);
				             }}>{page}</span>
			})}
		</div>
	);

};

export default Paginator;