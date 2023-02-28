import { Box } from '@mui/material';
import { useMemo } from 'react';
import { Loader } from '../components/Loader';
import { PostCard } from '../components/PostCard';
import { posts } from './data';

export const ListImages = () => {
	const data = useMemo(() => posts.map((e) => <PostCard post={e} key={e.id} />), [posts]);

	if (!posts) return <Loader />;

	return (
		<Box display="flex" flexDirection="column" alignItems="center" rowGap={2} p={2}>
			{data}
		</Box>
	);
};
