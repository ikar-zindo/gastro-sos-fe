import React, {useEffect, useRef} from 'react';
import style from '../../styles/common/text-area.module.css';
import {useForm} from "react-hook-form";

const TextArea = (props) => {
	let postValue = props.value;
	const maxLength100 = "Message should be at greater 100 characters long";
	let textareaRef = useRef(null);
	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm({
		// mode: "onChange",
		defaultValues: {
			text: postValue.text
		}
	});

	useEffect(() => {
		const adjustHeight = () => {
			const textarea = textareaRef.current;
			if (textarea) {
				textarea.style.height = 'auto';
				textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
			}
		};

		adjustHeight(); // Установить начальную высоту
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.addEventListener('input', adjustHeight);
		}
		return () => { // Удаление обработчика при размонтировании компонента
			if (textarea) {
				textarea.removeEventListener('input', adjustHeight);
			}
		};
	}, [textareaRef]); // Зависимость от текста, чтобы повторно вызвать эффект при изменении текста

	const onTextChange = () => {
		let text = textareaRef.current.value;
		let postValue = {text: text}
		props.handleChange(postValue);
	};

	// Обработчик нажатия клавиш
	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && event.ctrlKey) {
			onSubmit();
		}
	};

	const onSubmit = () => {
		props.handleClick();
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
					<textarea
						id='textarea'
						{...register("text", {
							maxLength: {
								value: 100,
								message: maxLength100
							}
						})}
						ref={textareaRef}
						value={postValue.text}
						onChange={onTextChange}
						onKeyDown={handleKeyDown}
						placeholder={props.placeholder}/>

				{<span className={style.errorMessage}>{errors.text?.message}</span>}
			</div>

			<div className={style.button}>
				<button type="submit">{props.buttonValue}</button>
			</div>
		</form>
	);
};

export default TextArea;