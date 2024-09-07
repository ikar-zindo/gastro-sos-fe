import React, {useEffect} from 'react';
import PostElement from "../../posts/PostElement";
import c from './MyPost.module.css';
import {addPostAction, updatePostTextAction} from "../../../../redux/content/my-post-content-reducer";

const MyPostComponent = (props) => {
	let myPostContent = props.store.getState().myPostContentPage;
	let users = props.store.getState().users
	let textareaRef = React.createRef();
	let postValue = myPostContent.postValue;

	let postElements = myPostContent.posts.map(post => {
		let user = users.find(user => user.id === post.userId);

		if (!user) {
			// debugger
			return <div>User not found</div>;
		}
		return (
			<PostElement post={post} user={user}/>
		)
	});

	let addPost = () => {
		// props.addPost();
		props.dispatch(addPostAction());
	}

	const handleChange = () => {
		let text = textareaRef.current.value;
		// let action = { type: 'UPDATE-NEW-POST-TEXT', text: text };
		let action = updatePostTextAction(text);
		props.dispatch(action);
		// props.updateNewPostText(text);
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
			addPost();
		}
	};

	return (
		<div>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea
						id='new-post'
						ref={textareaRef}
						value={postValue.text}
						defaultValue=''
						onChange={ handleChange }
						onKeyDown={ handleKeyDown }
						className="textarea"/>
				</div>

				<div className={c.button}>
					<button onClick={ addPost }>Add post</button>
				</div>

			</div>

			<div className={c.posts}>
				{postElements ? postElements : (<div className='loading'>Loading...</div>)}
			</div>
		</div>
	);
};

export default MyPostComponent;