import React from 'react';
import c from '../../../../styles/main/home.module.css'
import PostElement from "../../../common/elements/PostElement";
import Preloader from "../../../common/elements/Preloader";
import {ProfileInfoInterface} from "../../../../types/interfaces/profile-interfaces";
import {PostInterface} from "../../../../types/interfaces/post-interfaces";

interface NewsPostsComponentProps {
	posts: PostInterface[];
	users: ProfileInfoInterface[];
}

const NewsPostsComponent: React.FC<NewsPostsComponentProps> = (props) => {
	let users = props.users;

	let postElements = props.posts.map(post => {
		let user = users.find(user => user.userId === post.userId);

		return (user ? (<PostElement
			key={post.id}
			post={post}
			user={user}/>) : (<Preloader/>))
	});

	return (
		<div className={c.posts}>
			{postElements}
		</div>
	);
};

export default NewsPostsComponent;