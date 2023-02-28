import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<Box sx={{ bgcolor: '#F3F2EE' }} m={0}>
			{/* TODO: Add Nav Bar */}
			<Outlet />
		</Box>
	);
}

export default App;
