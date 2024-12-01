import React from 'react';
import style from '../../../styles/common/Paginator.module.css';
import cn from "classnames";

type Props = {
	totalItemsCount: number,
	pageSize: number,
	currentPage?: number,
	currentPortion?: number,
	onUpdatePageClick: (page: number) => void,
	onUpdatePortionClick: (currentPortion: number) => void,
	portionSize?: number,
}

const Paginator: React.FC<Props> = ({
	                                    totalItemsCount, pageSize, currentPage = 1, currentPortion = 1, portionSize = 10,
	                                    onUpdatePageClick,
	                                    onUpdatePortionClick
                                    }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let leftPortionPageNumber = (currentPortion - 1) * portionSize + 1;
	let rightPortionPageNumber = currentPortion * portionSize;

	return <div className={style.paginator}>
		{currentPortion > 1 &&
			<button onClick={() => {
				if (onUpdatePortionClick) {
					onUpdatePortionClick(currentPortion - 1);
				}
			}}>&lt;</button>}

		{pages
			.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
			.map((page) => {
				return <span className={cn({
					[style.selectPage]: currentPage === page
				}, style.pageNumber)}
				             key={page}
				             onClick={() => {
					             if (onUpdatePageClick) {
						             onUpdatePageClick(page);
					             }
				             }}>{page}</span>
			})}
		{portionCount > currentPortion &&
			<button onClick={() => {
				if (onUpdatePortionClick) {
					onUpdatePortionClick(currentPortion + 1);
				}
			}}>&gt;</button>}
	</div>
}

export default Paginator;