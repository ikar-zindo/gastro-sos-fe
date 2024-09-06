import React from 'react';
import c from "./Message.module.css";

const Message = (props) => {
	// debugger;
	return (
		<div className={c.message}>
			<div className={c.messageItem}>{props.content}</div>
		</div>
	);
};

export default Message;