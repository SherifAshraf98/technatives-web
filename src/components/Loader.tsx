import { Box, CircularProgress, useMediaQuery } from '@mui/material';
import { theme } from '../theme/mui';
import { screenHeight } from '../utils/consts';

export const Loader = () => {
	const mobile = useMediaQuery(() => theme.breakpoints.down('sm'));

	return (
		<Box
			display="flex"
			width="100%"
			height={screenHeight(mobile)}
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			sx={{ display: 'flex' }}
		>
			<CircularProgress />
		</Box>
	);
};
