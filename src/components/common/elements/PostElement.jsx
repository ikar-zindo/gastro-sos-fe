import React from 'react';
import style from "../../../styles/common/post.module.css";
import userPhoto from "../../../assets/img/userPhoto.png";
import Loader from "./Loader.jsx";

const PostElement = (props) => {
	let user = props.user;
	let post = props.post;

	if (!post || !user) {
		return <Loader key={post.id}/>
	}

	return (
		<div className={style.post}>
			<div className={style.userInfoWrapper}>
				<img alt='ava' src={user.photos.small != null ? user.photos.small : userPhoto}/>

				<div className={style.userInfo}>
					<p className={style.userName}>{user.fullName}</p>
					<p className={style.date}>{post.createdAt}</p>
				</div>
			</div>

			<p className={style.postMessage}>{post.text}</p>

			<div className={style.postImg}>
				{post.content.img && <img
					alt='content'
					src={post.content.img}></img>}</div>

			<div className={style.reactionContainer}>
				<span className={style.reaction}>Like {post.likes}</span>
				<span className={style.reaction}>Dislike {post.dislikes}</span>
				<span className={style.reaction}>Comment </span>
				<span className={style.reaction}>Share </span>
			</div>
		</div>
	);
};

export default PostElement;