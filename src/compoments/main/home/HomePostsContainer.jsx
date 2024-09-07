import React from 'react';
import c from '../../../styles/main/home/Home.module.css'
import PostComponent from "../../fragments/post/PostComponent";

const HomePostsContainer = (props) => {
	let homePage = props.store.getState().homePage;
	let users = props.store.getState().users;

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

export default HomePostsContainer;