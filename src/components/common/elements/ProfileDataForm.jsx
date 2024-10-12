import React from 'react';
import {useForm} from "react-hook-form";
import style from "../../../styles/main/profile/profileBio.module.css";
import {useDispatch} from "react-redux";
import {putProfileInfo} from "../../../redux/profile-reducer.js";
import {globalErrorMessages} from "../../../utils/global-error-messages.js";
import {locate} from "../../../utils/locates/locate.js";

const ProfileDataForm = ({profile, setEditMode, saveProfileInfo}) => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		setError,
		formState: {
			errors,
		},
	} = useForm({
			mode: "onChange",
			defaultValues: {
				userId: profile.userId,
				fullName: profile.fullName,
				aboutMe: profile.aboutMe,
				lookingForAJob: profile.lookingForAJob,
				lookingForAJobDescription: profile.lookingForAJobDescription,
				contacts: profile.contacts,
			}
		}
	);


	// Тут я загнался
	// Сложный и непонятный метод который вытягивает из массива сообщений об ошике нужное значеие
	// и ложит это значение в поля для каждого input
	const onSubmit = (data) => {
		saveProfileInfo(data).then((messages) => {
			if (messages) {
				messages.forEach(error => {
					// Разворачиваем строку и берем последнее слово, удаляя скобку, если она есть
					const words = error.split(' ').reverse(); // Разворачиваем строку
					let fieldName = words[0].replace(/[()]/g, '').toLowerCase(); // Удаляем скобку и приводим к нижнему регистру

					// Устанавливаем ошибки по имени поля
					if (error.includes('Contacts')) {
						const match = fieldName.match(/contacts->([^)\s]+)/);
						if (match && match[1]) {
							fieldName = match[1];
							setError(`contacts.${fieldName}`, {
								type: "manual",
								message: error.replace(/\s*\(.*?\)\s*/g, '') //
							});
						}
					} else {
						setError(`${fieldName}`, {
							type: "manual",
							message: error.replace(/\s*\(.*?\)\s*/g, '')
						});
					}
				});
			} else {
				setEditMode(false);
			}
		});
	}

	return <form onSubmit={handleSubmit(onSubmit)} className={style.aboutMe}>
		<div className={style.aboutMeBlock}>
			<b className={style.description}>Full name:</b>
			<input type="text"
			       placeholder="Full name:"
			       {...register("fullName", {
				       maxLength: {
					       value: 30,
					       message: globalErrorMessages.MAX_LENGTH_30
				       },
			       })}/>

		</div>

		{<span className={style.errorMessage}>{errors.fullname?.message}</span>}

		<div className={style.aboutMeBlock}>
			<b className={style.description}>About me:</b>
			<input type="text"
			       placeholder="About me:"
			       {...register("aboutMe", {
				       maxLength: {
					       value: 30,
					       message: 'maxLength30'
				       },
			       })}/>
		</div>

		<label className={style.checkboxContainer}>
			<b className={style.description}>Looking for a job</b>
			<input type="checkbox"
			       {...register("lookingForAJob")}/>
		</label>

		<div className={style.aboutMeBlock}>
			<b className={style.description}>My way:</b>
			<input type="text"
			       placeholder="My way:"
			       {...register("lookingForAJobDescription", {
				       maxLength: {
					       value: 30,
					       message: 'maxLength30'
				       },
			       })}/>
		</div>

		<div className={style.contacts}>
			<b className={style.description}>Contacts:</b>
				{Object.keys(profile.contacts).map(key => (
					<div className={style.contact} key={key}>
						<label>{key}:</label>
						<input type="text"
						       {...register(`contacts[${key}]`, {
							       maxLength: {
								       value: 100,
								       message: 'maxLength100'
							       }
						       })}/>
						<div>
							{errors.contacts && errors.contacts[key] && (
								<span className={style.errorMessage}>{errors.contacts[key].message}</span>)}
						</div>
					</div>
				))}
		</div>

		<div className={style.button}>
			<input type="submit" value={locate.profile.buttonSave}/>
		</div>
	</form>;
};

export default ProfileDataForm;