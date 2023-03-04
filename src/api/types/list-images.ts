export type GetImagesOutput = {
	id: string;
	caption: string;
	image: string;
	createdAt: string;
};

export type GetImagesParams = {
	page?: number;
	pageSize?: number;
};
