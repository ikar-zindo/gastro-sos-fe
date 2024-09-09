import React, {useEffect} from 'react';
import c from '../../styles/common/text-area.module.css';

const TextAreaComponent = (props) => {
	let postValue = props.value;
	let textareaRef = React.createRef();

	let onAddPostClick = () => {
		props.addNewPost();
	}

	const onPostTextChange = () => {
		let text = textareaRef.current.value;
		let postValue = {
			text: text
		}
		props.changePostText(postValue);
	};

	useEffect(() => {
		const adjustHeight = () => {
			const textarea = textareaRef.current;
			if (textarea) {
				textarea.style.height = 'auto';
				textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
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
						onChange={onPostTextChange}
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