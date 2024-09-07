import React from 'react';
import c from './Home.module.css'
import PostElement from "../posts/PostElement";
import StoryElement from "../../fragments/stories/StoryElement";

const HomeComponent = (props) => {
// debugger
	let homePage = props.store.getState().homePage;
	let users = props.store.getState().users;


	let postElements = homePage.posts.map(post => {
		let user = users.find(user => user.id === post.userId);

		return (user ? (<PostElement post={post} user={user}/>) : (<div className='loading'>Loading...</div>))
	});

	let stories = users.map(user => {
		return (user ? (<StoryElement user={user}/>) : (<div className='loading'>Loading...</div>));
	});


	return (
		<div className={c.home}>
			<div>
				<div className={c.stories}>
					{stories ? stories : (<div className='loading'>Loading...</div>)}
				</div>

				<div className={c.posts}>
					{postElements ? postElements : (<div className='loading'>Loading...</div>)}
				</div>
			</div>
		</div>
	);
}


export default HomeComponent;