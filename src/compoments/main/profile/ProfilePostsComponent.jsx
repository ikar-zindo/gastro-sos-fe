import React from 'react';
import PostComponent from "../../fragments/post/PostComponent";
import c from '../../../styles/main/profile/ProfilePosts.module.css';
import TextAreaComponent from "../../fragments/post/TextAreaComponent";
import {addPostAction} from "../../../redux/content/profile-posts-content-reducer";

const ProfilePostsComponent = (props) => {
	let myPostContent = props.myPostContentPage;
	let users = props.users

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
		props.addPost(addPostAction());
	}

	const handleChange = (postValue) => {
		props.updatePostText(postValue);
	};

	return (
		<div>
			<h3>My Posts</h3>
			<TextAreaComponent
				value={myPostContent.postValue}
				changePostText={handleChange}
				addNewPost={handleClick}/>

			<div className={c.posts}>
				{postElements ? postElements : (<div className='loading'>Loading...</div>)}
			</div>
		</div>
	);
};

export default ProfilePostsComponent;