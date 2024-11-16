import React, {useEffect} from 'react';
import style from '../../../styles/common/paginator.module.css';
import cn from "classnames";

type Props = {
	totalItemsCount: number,
	pageSize: number,
	currentPage?: number,
	portionNumber: number,
	onUpdatePageClick?: (page: number) => void,
	onUpdatePortionClick?: (portionNumber: number) => void,
	portionSize?: number,
}

const Paginator: React.FC<Props> = ({
	                                    totalItemsCount, pageSize, currentPage = 1, portionNumber, portionSize = 10,
	                                    onUpdatePageClick,
	                                    onUpdatePortionClick
                                    }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	useEffect(() => {
	}, [totalItemsCount]);

	return <div className={style.paginator}>
		{portionNumber > 1 &&
			<button onClick={() => {
				if (onUpdatePortionClick) {
					onUpdatePortionClick(portionNumber - 1);
				}
			}}>PREV</button>}

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
		{portionCount > portionNumber &&
			<button onClick={() => {
				// setPortionNumber(portionNumber + 1)
				if (onUpdatePortionClick) {
					onUpdatePortionClick(portionNumber + 1);
				}
			}}>NEXT</button>}
	</div>
}

export default Paginator;