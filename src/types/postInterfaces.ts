export interface PostInterface {
	id: number,
	userId: number | string;
	text?: string,
	content?: {
		img: string
	},
	comments?: [
		{
			id: number,
			userId: number,
			text: string,
		}
	],
	likes?: number,
	dislikes?: number,
	createdAt: string,
}

export interface PostValueInterface {
	text?: string;
	content?: {
		img?: string
	};
}