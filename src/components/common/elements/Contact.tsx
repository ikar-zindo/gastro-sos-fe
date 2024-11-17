import React from 'react';
import style from "../../../styles/main/profile/ProfileBio.module.css";

interface ContactProps {
	contactTitle: string;
	contactValue?: string;
}

const Contact: React.FC<ContactProps> = ({contactTitle, contactValue}) => {
	return (
		<div className={style.contact}>
			<b className={style.contactTitle}>{contactTitle}:</b><a href={contactValue}>{contactValue}</a>
		</div>
	);
};

export default Contact;