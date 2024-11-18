import React from 'react';
import style from "../../../styles/common/Post.module.css";

export enum PostIconEnum  {
	Like = "Like",
	Dislike = "Dislike",
	Comment = "Comment",
	Share = "Share",
}

interface PostIconProps  {
	type: PostIconEnum,
}

const PostIcon: React.FC<PostIconProps> = ({type}) => {

	const getIcon = () => {
		switch (type) {
			case PostIconEnum.Like:
				return (
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
						<g id="SVGRepo_iconCarrier">
							<path
								d="M7.08409 10.6629L10.3393 3.23907C10.79 2.21121 11.9999 1.68012 12.9811 2.2056C14.5081 3.0234 14.2018 3.78995 14.2018 8.60158H19.9659C21.2123 8.60158 22.1654 9.72766 21.9759 10.9763L20.568 20.2521C20.4154 21.2577 19.5618 22 18.558 22H7.08409M7.08409 10.6629V22M7.08409 10.6629H4.03364C2.91049 10.6629 2 11.5857 2 12.7242V19.9387C2 21.0771 2.91049 22 4.03364 22L7.08409 22"
								stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</g>
					</svg>
				);
			case PostIconEnum.Dislike:
				return (
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
						<g id="SVGRepo_iconCarrier">
							<path
								d="M16.9159 13.3371L13.6607 20.7609C13.21 21.7888 12.0001 22.3199 11.0189 21.7944C9.4919 20.9766 9.79819 20.2101 9.79819 15.3984H4.03407C2.78769 15.3984 1.83456 14.2723 2.02408 13.0237L3.43199 3.74785C3.58461 2.74229 4.43823 2 5.44198 2H16.9159M16.9159 13.3371V2M16.9159 13.3371H19.9664C21.0895 13.3371 22 12.4143 22 11.2758V4.06132C22 2.9229 21.0895 2.00003 19.9664 2.00003L16.9159 2"
								stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</g>
					</svg>
				);
			case PostIconEnum.Comment:
				return (
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
						<g id="SVGRepo_iconCarrier">
							<path d="M7 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
							      strokeLinejoin="round"/>
							<path d="M7 11H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
							      strokeLinejoin="round"/>
							<path
								d="M19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H8L11.6464 20.6464C11.8417 20.8417 12.1583 20.8417 12.3536 20.6464L16 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3Z"
								stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</g>
					</svg>
				);
			case PostIconEnum.Share:
				return (
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
						<g id="SVGRepo_iconCarrier">
							<path
								d="M13.9289 9.21468V4.92896L21 12L13.9289 19.0711V14.2392M13.9289 9.22304C13.2857 9.07708 12.6163 9.00002 11.9289 9.00002C6.95836 9.00002 2.92892 13.0295 2.92892 18C2.92892 18.8675 3.05165 19.7063 3.28069 20.5C4.36404 16.7457 7.82583 14 11.9289 14C12.6163 14 13.2857 14.0771 13.9289 14.223"
								stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</g>
					</svg>
				)
		}
	}

	return (
		<div className={style.icon}>
			{getIcon()}
		</div>
	);
};

export default PostIcon;