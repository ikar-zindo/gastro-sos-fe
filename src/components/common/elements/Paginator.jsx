import React, {useEffect, useState} from 'react';
import style from '../../../styles/common/paginator.module.css';
import cn from "classnames";
import {useDispatch} from "react-redux";

const Paginator = ({
	                   totalItemsCount, pageSize, currentPage, currentPortion,
	                   onUpdatePageClick, onUpdatePortionClick, portionSize = 10
                   }) => {
	const dispatch = useDispatch();
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
	}, [totalItemsCount]);

	return (
		<div className={style.paginator}>
			{portionNumber > 1 &&
				<button onClick={() => {
					onUpdatePortionClick(portionNumber);
					setPortionNumber(portionNumber - 1);
				}}>PREV</button>}

			{pages
				.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
				.map(pageNumber => {
					return <span className={cn({
						[style.selectPage]: currentPage === pageNumber
					}, style.pageNumber)}
					             key={pageNumber}
					             onClick={() => {
						             onUpdatePageClick(pageNumber);
					             }}>{pageNumber}</span>
				})}

			{portionCount > portionNumber &&
				<button onClick={() => {
					onUpdatePortionClick(portionNumber);
					setPortionNumber(portionNumber + 1)
				}}>NEXT</button>}
		</div>
	)
}

export default Paginator;