import React from 'react';
import c from "../../../styles/common/post.module.css";
import userPhoto from "../../../assets/img/userPhoto.png";
import Loader from "./Loader.jsx";

const PostElement = (props) => {
	let user = props.user;
	let post = props.post;

	if (!post || !user) {
		return <Loader key={post.id}/>
	}

	return (
		<div className={c.post}>
			<div className={c.userInfoWrapper}>
				<img alt='ava' src={user.photos.small != null ? user.photos.small : userPhoto}/>

				<div className={c.userInfo}>
					<p className={c.userName}>{user.fullName}</p>
					<p className={c.date}>{post.createdAt}</p>
				</div>
			</div>

			<p className={c.postMessage}>{post.text}</p>

			{post.content.img ? <img alt='content' src={post.content.img}></img> : <div></div>}

			<div className={c.reactionContainer}>
				<span className={c.reaction}>Like {post.likes}</span>
				<span className={c.reaction}> Dislike {post.dislikes}</span>
				<span className={c.reaction}> Comment</span>
				<span className={c.reaction}> Share</span>
			</div>
		</div>
	);
};

export default PostElement;