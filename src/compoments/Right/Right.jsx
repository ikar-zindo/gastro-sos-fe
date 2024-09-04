import React from 'react';
import c from './Right.module.css';

const Right = () => {
	return (
		<div className={c.right}>
			<div>
				<div>
					<h2 className={c.h2}> My Right</h2>
					<div>New Right</div>
					<div className={c.posts}>
						<div className={c.item}>Right 1</div>
						<div className={c.item}>Right 1</div>


					</div>
				</div>

			</div>
		</div>
	);
};

export default Right;