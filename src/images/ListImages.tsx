import { Box } from '@mui/material';
import { useGetImages } from '../api';
import { Loader } from '../components/Loader';
import { PostCard } from '../components/PostCard';
import { AppError } from '../error/AppError';

export const ListImages = () => {
	const { data, isLoading, error } = useGetImages({
		// page: 1,
		// pageSize: 1,
	});
	if (isLoading || !data?.data) return <Loader />;
	if (true) <AppError />;

	const images = data.data.map((e) => <PostCard post={e} key={e.id} />);

	return (
		<Box display="flex" flexDirection="column" alignItems="center" rowGap={2} py={2} px={1}>
			{images}
		</Box>
	);
};
