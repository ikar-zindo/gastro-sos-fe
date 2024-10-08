import React, {useEffect, useRef} from 'react';
import c from '../../styles/common/text-area.module.css';
import {useForm} from "react-hook-form";

const TextAreaComponent = (props) => {
	let postValue = props.value;
	let textareaRef = useRef(null);
	const {
		register,
		handleSubmit,
		watch,
		formState: {
			errors
		}
	} = useForm({
		defaultValues: {
			postValue: {
				text: 'gastro-sos',
				content: {}
			}
		}
	})

	const onTextChange = () => {
		let text = textareaRef.current.value;
		let postValue = {
			text: text
		}
		props.handleChange(postValue);
	};

	let onAddPostClick = () => {
		props.handleClick();
	}

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

	// Обработчик нажатия клавиш
	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && event.ctrlKey) {
			onAddPostClick();
		}
	};

	return (
		<div>
			<div>
					<textarea
						id='new-post'
						ref={textareaRef}
						value={postValue.text}
						onChange={onTextChange}
						onKeyDown={handleKeyDown}
						className="textarea"/>
			</div>

			<div className={c.button}>
				<button onClick={onAddPostClick}>{props.buttonValue}</button>
			</div>
		</div>
	);
};

export default TextAreaComponent;