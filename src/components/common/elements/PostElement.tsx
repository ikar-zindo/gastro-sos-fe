import React from 'react';
import style from "../../../styles/common/Post.module.css";
// @ts-ignore
import userPhoto from "../../../assets/img/userPhoto.png";
import Preloader from "./Preloader";
import PostIcon, {PostIconEnum} from "./PostIcon";
import {ProfileInfoInterface} from "../../../types/interfaces/profile-interfaces";
import {PostInterface} from "../../../types/interfaces/post-interfaces";

interface PostElementProps {
	user: ProfileInfoInterface;
	post: PostInterface;
}

const PostElement: React.FC<PostElementProps> = (props) => {
	const user = props.user;
	const post = props.post;

	if (!post || !user) {
		return <Preloader key={post.id}/>
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
				{post.content?.img && <img
					alt='content'
					src={post.content.img}></img>}</div>

			<div className={style.reactionContainer}>
				<span className={style.reaction}>
					<PostIcon type={PostIconEnum.Like}/>
					{post.likes}
				</span>
				<span className={style.reaction}>
					<PostIcon type={PostIconEnum.Dislike}/>
					{post.dislikes}
				</span>
				<span className={style.reaction}>
					<PostIcon type={PostIconEnum.Comment}/>
					{post.comments?.length}
				</span>
				<span className={style.reaction}>
					<PostIcon type={PostIconEnum.Share}/>
				</span>
			</div>
		</div>
	);
};

export default PostElement;