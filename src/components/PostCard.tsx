import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

interface PostCardProps {
	post: {
		id: string;
		post: string;
		imageUrl: string;
		createdAt: string;
	};
}

export const PostCard = ({ post: { post, imageUrl, createdAt } }: PostCardProps) => {
	return (
		<Card sx={{ maxWidth: 600 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						{post[0].toUpperCase()}
					</Avatar>
				}
				subheader={createdAt}
				sx={{ pb: 0 }}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{post}
				</Typography>
			</CardContent>
			<CardMedia component="img" height="194" image={imageUrl} alt="Paella dish" />
		</Card>
	);
};
