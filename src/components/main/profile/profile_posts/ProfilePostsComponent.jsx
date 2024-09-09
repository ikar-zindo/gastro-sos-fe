import React from 'react';
import PostComponent from "../../../common/PostComponent.jsx";
import style from '../../../../styles/main/profile/profile.module.css';
import TextAreaComponent from "../../../common/TextAreaComponent.jsx";

const ProfilePostsComponent = (props) => {
	let profilePostContentPage = props.profilePostContentPage;
	let users = props.users

	let postElements = profilePostContentPage.posts.map(post => {
		let user = users.find(user => user.id === post.userId);

		if (!user) {
			return <div>User not found</div>;
		}
		return (
			<PostComponent key={post.id} post={post} user={user}/>
		)
	});

	let handleClick = () => {
		props.addPost();
	}

	const handleChange = (postValue) => {
		props.updatePostText(postValue);
	};

	return (
		<div className={style.postsWrapper}>
			<TextAreaComponent
				buttonValue='Add post'
				value={profilePostContentPage.postValue}
				changePostText={handleChange}
				addNewPost={handleClick}/>

			<div className={style.posts}>
				{postElements ? postElements : (<div className='loading'>Loading...</div>)}
			</div>
		</div>
	);
};

export default ProfilePostsComponent;