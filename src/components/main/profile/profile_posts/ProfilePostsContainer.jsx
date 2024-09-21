import React from 'react';
import PostElement from "../../../common/elements/PostElement.jsx";
import style from '../../../../styles/main/profile/profile.module.css';
import TextAreaComponent from "../../../common/TextAreaComponent.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addPost, updatePostText} from "../../../../redux/content/profile-posts-content-reducer.js";

const ProfilePostsContainer = () => {
	const dispatch = useDispatch();
	const users = useSelector(state => state.usersPage.users)
	const profilePostContentPage = useSelector(state => state.profilePostContentPage)

	let postElements = profilePostContentPage.posts.map(post => {
		let user = users.find(user => user.id === post.userId);

		return <PostElement key={post.id} post={post} user={user}/>
	});

	let handleClick = () => {
		dispatch(addPost());
	}

	const handleChange = (postValue) => {
		dispatch(updatePostText(postValue));
	};

	return (
		<div className={style.postsWrapper}>
			<TextAreaComponent
				buttonValue='Add post'
				value={profilePostContentPage.postValue}
				changePostText={handleChange}
				addNewPost={handleClick}/>

			<div className={style.posts}>
				{postElements}
			</div>
		</div>
	);
};

export default ProfilePostsContainer;