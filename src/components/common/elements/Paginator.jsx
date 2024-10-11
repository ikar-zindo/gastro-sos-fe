import React, {useEffect, useState} from 'react';
import style from '../../../styles/common/paginator.module.css';
import cn from "classnames";

const Paginator = ({
	                   totalItemsCount, pageSize, currentPage, currentPortion,
	                   onUpdatePageClick, onUpdatePortionClick, portionSize = 10
                   }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(currentPortion);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	useEffect(() => {
		console.log("p", portionNumber)
	}, [totalItemsCount]);

	return <div className={style.paginator}>
		{portionNumber > 1 &&
			<button onClick={() => {
				setPortionNumber(portionNumber - 1)
				onUpdatePortionClick(portionNumber - 1);
			}}>PREV</button>}

		{pages
			.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
			.map((p) => {
				console.log("p", portionNumber)
				return <span className={cn({
					[style.selectPage]: currentPage === p
				}, style.pageNumber)}
				             key={p}
				             onClick={(e) => {
					             onUpdatePageClick(p);
				             }}>{p}</span>
			})}
		{portionCount > portionNumber &&
			<button onClick={() => {
				setPortionNumber(portionNumber + 1)
				onUpdatePortionClick(portionNumber + 1);
			}}>NEXT</button>}


	</div>
}

export default Paginator;