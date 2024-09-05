import React from 'react';
import c from "./Post.module.css";

const Post = (props) => {

	let user = props.user;
	let post = props.post;

	return (
		<div className={c.post}>
			<div className={c.userInfo}>
				<img alt='ava' src={user.ava}/>

				<div className={c.userInfoWrapper}>
					<p className={c.userName}>{user.name}</p>
					<p className={c.date}>12/12/24</p>
				</div>

			</div>

			<p className={c.postMessage}>{post.message}</p>

			<div className={c.reactionContainer}>
				<span className={c.reaction}>Like {post.likes}</span>
				<span className={c.reaction}> Dislike {post.dislikes}</span>
				<span className={c.reaction}> Comment</span>
				<span className={c.reaction}> Share</span>
			</div>
		</div>
	);
};

export default Post;