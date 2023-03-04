import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { GetImagesOutput } from '../api';

interface PostCardProps {
	post: GetImagesOutput;
}

export const PostCard = ({ post: { caption, image, createdAt } }: PostCardProps) => {
	const date = new Date(createdAt);
	return (
		<Card sx={{ maxWidth: 600, width: '100%' }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
						{caption[0].toUpperCase()}
					</Avatar>
				}
				subheader={date.toDateString()}
				sx={{ pb: 0 }}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{caption}
				</Typography>
			</CardContent>
			<CardMedia component="img" height="auto" image={image} />
		</Card>
	);
};
