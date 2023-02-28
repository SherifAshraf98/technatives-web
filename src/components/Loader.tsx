import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
	return (
		<Box
			display="flex"
			width="100%"
			height="100vh"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			sx={{ display: 'flex' }}
		>
			<CircularProgress />
		</Box>
	);
};
