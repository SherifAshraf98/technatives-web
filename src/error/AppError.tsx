import { Box, Button, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';
import { AppRoutePath } from '../routes';

export const AppError = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			textAlign="center"
			width="100%"
			height="100vh"
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
