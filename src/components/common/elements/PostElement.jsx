import React from 'react';
import c from "../../../styles/common/post.module.css";
import PreloaderElement from "./PreloaderElement.jsx";

const PostElement = (props) => {
	let user = props.user;
	let post = props.post;

	if (!post && !user) {
		return <PreloaderElement/>
	}
	return (
		<div className={c.post}>
			<div className={c.userInfoWrapper}>
				<img alt='ava' src={user.imgUrl}/>

				<div className={c.userInfo}>
					<p className={c.userName}>{user.name}</p>
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