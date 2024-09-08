import React from 'react';
import c from '../../../styles/main/home/Home.module.css'
import PostComponent from "../../fragments/post/PostComponent";

const HomePostsComponent = (props) => {
	let homePage = props.homePage;
	let users = props.users;

	let postElements = homePage.posts.map(post => {
		let user = users.find(user => user.id === post.userId);

		return (user ? (<PostComponent post={post} user={user}/>) : (<div className='loading'>Loading...</div>))
	});

	return (
		<div className={c.posts}>
			{postElements ? postElements : (<div className='loading'>Loading...</div>)}
		</div>
	);
};

export default HomePostsComponent;