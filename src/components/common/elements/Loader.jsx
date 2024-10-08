import React from 'react';
import styles from "../../../styles/common/preloader.module.css";
import preloader from "../../../assets/img/preloader.svg";

const Loader = () => {
	return (
		<div className={styles.preloaderContainer}>
			<img className={styles.preloader} src={preloader} alt="loading..."/>
		</div>
	);
};

export default Loader;