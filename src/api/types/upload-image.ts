export interface CreateImageOutput {
	id: number;
	caption: string;
	image: string;
	createdAt: string;
}

export interface CreateImageBody {
	file: any;
	caption: string;
}
