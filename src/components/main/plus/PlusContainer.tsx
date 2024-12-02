import React from 'react';
import style from '../../../styles/main/Plus.module.css'
import {Button} from "antd";

const PlusContainer: React.FC = () => {
return (
		<div className={style.plus}>
			<Button type={"primary"}>OK</Button>
		</div>
	);
};

export default PlusContainer;