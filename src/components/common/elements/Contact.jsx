import React from 'react';
import style from "../../../styles/main/profile/profileBio.module.css";


const Contact = ({contactTitle, contactValue}) => {
	return (
		<div className={style.contact}>
			<b className={style.contactTitle}>{contactTitle}:</b><a href={contactValue}>{contactValue}</a>
		</div>
	);
};

export default Contact;