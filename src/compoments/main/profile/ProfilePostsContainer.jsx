import React from 'react';
import PostComponent from "../../fragments/post/PostComponent";
import c from '../../../styles/main/profile/ProfilePosts.module.css';
import TextAreaComponent from "../../fragments/post/TextAreaComponent";
import {addPostAction, updatePostTextAction} from "../../../redux/content/profile-posts-content-reducer";

const ProfilePostsContainer = (props) => {
	let myPostContent = props.store.getState().myPostContentPage;
	let users = props.store.getState().users

	let postElements = myPostContent.posts.map(post => {
		let user = users.find(user => user.id === post.userId);

		if (!user) {
			return <div>User not found</div>;
		}
		return (
			<PostComponent post={post} user={user}/>
		)
	});

	let handleClick = () => {
		props.store.dispatch(addPostAction());
	}

	const handleChange = (postValue) => {
		let action = updatePostTextAction(postValue);
		props.store.dispatch(action);
	};

	return (
		<div>
			<h3>My Posts</h3>
			<TextAreaComponent
				postValue={myPostContent.postValue}
				changePostText={handleChange}
				addNewPost={handleClick}/>

			<div className={c.posts}>
				{postElements ? postElements : (<div className='loading'>Loading...</div>)}
			</div>
		</div>
	);
};

export default ProfilePostsContainer;