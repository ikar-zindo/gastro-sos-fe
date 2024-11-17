import React, {useEffect, useRef} from 'react';
import style from '../../../styles/common/TextArea.module.css';
import {useForm} from "react-hook-form";
import {MessageValueInterface} from "../../../types/interfaces/dialog-interfaces";

interface MessageAreaInterface {
	placeholder: string;
	buttonValue: string;
	value: MessageValueInterface;
	handleChange: (value: MessageValueInterface) => void;
	handleClick: () => void;
}

const MessageTextArea: React.FC<MessageAreaInterface> = (props) => {
	let postValue = props.value;
	let textareaRef = useRef<HTMLTextAreaElement>(null);
	const {
		handleSubmit,
		setValue,
		formState: {errors}
	} = useForm({
		// mode: "onChange",
		defaultValues: {
			text: postValue.text
		}
	});

	useEffect(() => {
		setValue("text", postValue.text);

		const adjustHeight = () => {
			const textarea = textareaRef.current;
			if (textarea) {
				textarea.style.height = 'auto';
				textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;
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
	}, [textareaRef, setValue]); // Зависимость от текста, чтобы повторно вызвать эффект при изменении текста

	const onTextChange = () => {
		if (textareaRef.current) {
			let text = textareaRef.current.value;
			props.handleChange({text: text});
		}
	};

	// Обработчик нажатия клавиш
	const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === 'Enter' && event.ctrlKey) {
			onSubmit();
		}
	};

	const onSubmit = () => {
		props.handleClick();
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div> {/* TODO: реализовать через useForm с использованием register */}
				<textarea
					id='textarea'
					required
					ref={textareaRef}
					value={postValue.text}
					onChange={onTextChange}
					onKeyDown={handleKeyDown}
					placeholder={props.placeholder}/>

				{<span className={style.errorMessage}>{errors.text?.message}</span>}
			</div>

			{postValue.text && <div className={style.button}>
				<input type="submit" value={props.buttonValue}/>
			</div>}
		</form>
	);
};

export default MessageTextArea;


// {...register("text", {
// 	required: true,
// 	maxLength: {
// 		value: 100,
// 		message: maxLength100
// 	}
// })}