import React, {useEffect, useState} from 'react';
import PostElement from "../../../common/elements/PostElement.jsx";
import style from '../../../../styles/main/profile/profile.module.css';
import TextArea from "../../../common/TextArea.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addPost, updatePostText} from "../../../../redux/content/profile-posts-content-reducer.js";
import {getUserProfile} from "../../../../redux/profile-reducer.js";
import Loader from "../../../common/elements/Loader.jsx";

const ProfilePostsContainer = () => {
	const dispatch = useDispatch();
	// const users = useSelector(state => state.usersPage.usersTest);
	const profilePostContentPage = useSelector(state => state.profilePostContentPage);
	const placeholder = profilePostContentPage.placeholder;
	const buttonValue = profilePostContentPage.buttonValue;
	const userId = useSelector(state => state.auth.id);

	const [users, setUsers] = useState({});

	const fetchUserProfile = async (userId) => {
		if (!users[userId]) {
			const userProfile = await dispatch(getUserProfile(userId)).unwrap();
			setUsers((prevUsers) => ({
				...prevUsers,
				[userId]: userProfile
			}));
		}
	};

	useEffect(() => {
		profilePostContentPage.posts.forEach((post) => {
			fetchUserProfile(post.userId).then(r => true);
		});
	}, [profilePostContentPage.posts]);

	let postElements = profilePostContentPage.posts.map(post => {
		const user = users[post.userId];

		if (!user) {
			return <Loader key={post.id} />;
		}
		return <PostElement key={post.id} post={post} user={user}/>
	});

	const updateNewPostText = (postValue) => {
		dispatch(updatePostText(postValue));
	};

	let addNewPost = () => {
		dispatch(addPost(userId));
	}

	return (
		<div className={style.postsWrapper}>
			<TextArea
				placeholder={placeholder}
				buttonValue={buttonValue}
				value={profilePostContentPage.postValue}
				handleChange={updateNewPostText}
				handleClick={addNewPost}/>

			<div className={style.posts}>
				{postElements ? postElements : <Loader/>}
			</div>
		</div>
	);
};

export default ProfilePostsContainer;