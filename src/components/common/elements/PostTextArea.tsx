import React, {useEffect, useRef} from 'react';
import style from '../../../styles/common/TextArea.module.css';
import {useForm} from "react-hook-form";
import {PostValueInterface} from "../../../types/interfaces/post-interfaces";

export interface PostTextareaInterface {
	placeholder: string;
	buttonValue: string;
	value: PostValueInterface;
	handleChange: (value: PostValueInterface) => void;
	handleClick: () => void;
}

const PostTextArea: React.FC<PostTextareaInterface> = (props) => {
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
		<div className={style.textareaContainer}>
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
					<button type="submit" aria-label={props.buttonValue}>
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
							<g id="SVGRepo_iconCarrier">
								<path d="M22 2L2 8.66667L11.5833 12.4167M22 2L15.3333 22L11.5833 12.4167M22 2L11.5833 12.4167"
								      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</g>
						</svg>
					</button>
				</div>}
			</form>
		</div>
	);
};

export default PostTextArea;