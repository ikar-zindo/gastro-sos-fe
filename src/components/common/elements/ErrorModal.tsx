import React from 'react';
import style from "./../../../styles/common/error.module.css";
import {GlobalError} from "../../../types/interfaces/appInteefaces";
import {useAppDispatch} from "../../../hooks/hooks";
import {clearGlobalError} from "../../../store/appSlice";

interface ErrorModalProps {
	error: GlobalError;
}

const ErrorModal: React.FC<ErrorModalProps> = ({error}) => {
	const dispatch = useAppDispatch();

	const handleClose = () => {
		dispatch(clearGlobalError());
	}

	return (
		<div className={style.errorModalOverlay}>
			<div className={style.errorModal}>
				<h2>Error: {error.code}</h2>
				<p>{error.message}</p>
				<button onClick={handleClose}>Close</button>
			</div>
		</div>
	);
};

export default ErrorModal;