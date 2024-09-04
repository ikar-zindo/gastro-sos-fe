import React from 'react';
import c from "./Message.module.css";

const Message = (props) => {
	return (
		<div className={c.message}>
			<div className={c.messageItem}>{props.message}</div>
		</div>
	);
};

export default Message;