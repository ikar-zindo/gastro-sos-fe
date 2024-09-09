import React from 'react';
import style from '../../../styles/main/users/Users.module.css';
import axios from "axios";
import userPhoto from '../../../assets/img/userPhoto.png'
import {setCurrentPageAction} from "../../../redux/users-reducer.js";

class UserClass extends React.Component {
	componentDidMount() {
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
		axios.get(
			'https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				// debugger
				this.props.setTotalUsers(response.data.totalCount);
			});
	}

	onUpdatePageClick = (page) => {
		this.props.setCurrentPage(page);
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	};


	render() {
		let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return (
			<div className={style.userWrapper}>
				<div className={style.pagination}>
					{pages.map(page => {
						return <span key={page} className={this.props.currentPage === page ? style.selectPage : ""}
						             onClick={() => {
							             this.onUpdatePageClick(page);
						             }}>{page}</span>
					})}
				</div>

				{
					this.props.users.map(user => (
							<div key={user.id} className={style.userInfo}>
								<div className={style.img}>
									{/*<img alt='ava' src={user.imgUrl}/>*/}
									<img alt='ava' src={(user.photos.small) != null ? user.photos.small : userPhoto}/>
								</div>

								<div className={style.userInfoWrapper}>
									<div className={style.userNameWrapper}>
										<p className={style.userName}>{user.name}</p>
										<p className={style.status}>{user.status}</p>
										{/*</div>*/}

										{/*<div className={style.userLocation}>*/}
										<p className={style.city}>{"user.location.city"}</p>
										<p className={style.country}>{"user.location.country"}</p>
									</div>
								</div>

								<div className={style.button}>
									{user.following
										? <button onClick={() => {
											this.props.unfollow(user.id)
										}}>Unfollow</button>
										: <button onClick={() => {
											this.props.follow(user.id)
										}}>Follow</button>}
								</div>
							</div>
						)
					)}
			</div>
		);
	}
}

export default UserClass;