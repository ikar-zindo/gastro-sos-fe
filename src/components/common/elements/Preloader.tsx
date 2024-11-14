import styles from "../../../styles/common/preloader.module.css";
import {FC} from "react";

const Preloader: FC = () => {
	return (
		<div className={styles.preloaderContainer}>
			<svg className={styles.preloader} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
				<circle fill='none' strokeOpacity='1' stroke='currentColor' strokeWidth='.5' cx='100' cy='100' r='0'>
					<animate attributeName='r' calcMode='spline' dur='2' values='1;80' keyTimes='0;1' keySplines='0 .2 .5 1'
					         repeatCount='indefinite'></animate>
					<animate attributeName='stroke-width' calcMode='spline' dur='2' values='0;25' keyTimes='0;1'
					         keySplines='0 .2 .5 1' repeatCount='indefinite'></animate>
					<animate attributeName='stroke-opacity' calcMode='spline' dur='2' values='1;0' keyTimes='0;1'
					         keySplines='0 .2 .5 1' repeatCount='indefinite'></animate>
				</circle>
			</svg>
		</div>
	);
};

export default Preloader;