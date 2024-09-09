import React from 'react';
import styles from "../../styles/fragments/preloader.module.css";
import preloader from "../../assets/img/preloader.svg";

const Preloader = () => {
	return (
		<div className={styles.preloaderContainer}>
			<img className={styles.preloader} src={preloader} alt="loading..."/>
		</div>
	);
};

export default Preloader;