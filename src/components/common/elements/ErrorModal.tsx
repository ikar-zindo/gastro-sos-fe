import React from 'react';
import style from "../../../styles/common/Error.module.css";
import {GlobalError} from "../../../types/interfaces/app-interfaces";
import {useAppDispatch} from "../../../hooks/hooks";
import {clearGlobalError} from "../../../store/app-slice";

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
				<h2>{error.status}</h2>
				<h2>Error: {error.code}</h2>
				<p>{error.message}</p>
				<button onClick={handleClose}>Close</button>
			</div>
		</div>
	);
};

export default ErrorModal;