import React, {useEffect, useState} from 'react';
import PostElement from "../../../common/elements/PostElement";
import style from '../../../../styles/main/profile/Profile.module.css';
import {addPostAction, updatePostTextAction} from "../../../../store/profile-posts-slice";
import {getUserProfile} from "../../../../store/profile-slice";
import Preloader from "../../../common/elements/Preloader";
import {ProfileInfoInterface, ProfilePostsState} from "../../../../types/interfaces/profile-interfaces";
import {selectAuthUserId} from "../../../../selectors/auth-selectors";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {PostValueInterface} from "../../../../types/interfaces/post-interfaces";
import PostTextArea from "../../../common/elements/PostTextArea";

interface ProfilePostsContainerProps {
	profilePostContentPage: ProfilePostsState;
	isOwner: boolean;
}

const ProfilePostsContainer: React.FC<ProfilePostsContainerProps> = React.memo(props => {
	const dispatch = useAppDispatch();
	const profilePostContentPage = props.profilePostContentPage;
	const placeholder = profilePostContentPage.placeholder;
	const buttonValue = profilePostContentPage.buttonValue;
	const posts = profilePostContentPage.posts;
	const userId = useAppSelector(selectAuthUserId);
	const [users, setUsers] = useState<Record<number | string, ProfileInfoInterface>>({});

	const fetchUserProfile = async (userId: number | string) => {
		if (!users[userId]) {
			const userProfile = await dispatch(getUserProfile(userId)).unwrap();
			setUsers((prevUsers) => ({
				...prevUsers,
				[userId]: userProfile
			}));
		}
	};

	useEffect(() => {
		posts.forEach((post) => {
			fetchUserProfile(post.userId).then(() => true);
		});
	}, [posts]);

	let postElements =
		[...posts]
			.reverse()
			.map(post => {
				const user = users[post.userId];
				return <PostElement key={post.id} post={post} user={user}/>
			});

	const updateNewPostText = (postValue: PostValueInterface) => {
		dispatch(updatePostTextAction(postValue));
	};

	let addNewPost = () => {
		if (userId) dispatch(addPostAction(userId));
	}

	return (
		<div className={style.postsWrapper}>
			<div className={style.textAreaWrapper}>
				<PostTextArea
					placeholder={placeholder}
					buttonValue={buttonValue}
					value={profilePostContentPage.postValue}
					handleChange={updateNewPostText}
					handleClick={addNewPost}/>
			</div>

			<div className={style.posts}>
				{postElements ? postElements : <Preloader/>}
			</div>
		</div>
	);
});

export default ProfilePostsContainer;