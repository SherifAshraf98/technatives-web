import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useRouteError } from 'react-router-dom';
import { AppRoutePath } from '../routes';
import { theme } from '../theme/mui';
import { screenHeight } from '../utils/consts';

export const AppError = () => {
	const error = useRouteError();
	console.error(error);
	const mobile = useMediaQuery(() => theme.breakpoints.down('sm'));

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			textAlign="center"
			width="100%"
			height={screenHeight(mobile)}
		>
			<Typography variant="h2" gutterBottom>
				Oops!
			</Typography>
			<Typography>Sorry, an unexpected error has occurred.</Typography>

			<Box py={4} columnGap={1} display="flex" justifyContent="center">
				<Button variant="outlined" size="large" href={AppRoutePath.Home}>
					Home
				</Button>
			</Box>
		</Box>
	);
};
