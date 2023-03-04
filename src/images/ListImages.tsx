import { Box, Typography, useMediaQuery } from '@mui/material';
import { useGetImages } from '../api';
import { Loader } from '../components/Loader';
import { PostCard } from '../components/PostCard';
import { theme } from '../theme/mui';
import { screenHeight } from '../utils/consts';

export const ListImages = () => {
	const mobile = useMediaQuery(() => theme.breakpoints.down('sm'));

	const { data, isLoading } = useGetImages({
		// page: 1,
		// pageSize: 1,
	});
	if (isLoading) return <Loader />;
	if (!data?.data) return <Typography variant="h5">No images added, please add some.</Typography>;

	const images = data.data.map((e) => <PostCard post={e} key={e.id} />);

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			rowGap={2}
			py={2}
			px={1}
			minHeight={screenHeight(mobile)}
		>
			{images}
		</Box>
	);
};
