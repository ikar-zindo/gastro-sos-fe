import React from 'react';
import styles from "../../styles/common/preloader.module.css";
import preloader from "../../assets/img/preloader.svg";

const PreloaderComponent = () => {
	return (
		<div className={styles.preloaderContainer}>
			<img className={styles.preloader} src={preloader} alt="loading..."/>
		</div>
	);
};

export default PreloaderComponent;