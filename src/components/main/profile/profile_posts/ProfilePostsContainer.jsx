import React from 'react';
import PostElement from "../../../common/elements/PostElement.jsx";
import style from '../../../../styles/main/profile/profile.module.css';
import TextArea from "../../../common/TextArea.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addPost, updatePostText} from "../../../../redux/content/profile-posts-content-reducer.js";

const ProfilePostsContainer = () => {
	const dispatch = useDispatch();
	const users = useSelector(state => state.usersPage.usersTest);
	const profilePostContentPage = useSelector(state => state.profilePostContentPage);
	const placeholder = profilePostContentPage.placeholder;
	const buttonValue = profilePostContentPage.buttonValue;
	const userId = useSelector(state => state.auth.id);

	let postElements = profilePostContentPage.posts.map(post => {
		let user = users.find(user => user.id === post.userId);

		return <PostElement key={post.id} post={post} user={user}/>
	});

	const updateNewPostText = (postValue) => {
		dispatch(updatePostText(postValue));
	};

	let addNewPost = () => {
		dispatch(addPost(userId));
	}

	return (
		<div className={style.postsWrapper}>
			<TextArea
				placeholder={placeholder}
				buttonValue={buttonValue}
				value={profilePostContentPage.postValue}
				handleChange={updateNewPostText}
				handleClick={addNewPost}/>

			<div className={style.posts}>
				{postElements}
			</div>
		</div>
	);
};

export default ProfilePostsContainer;