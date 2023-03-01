import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';
import AppDrawer from './components/AppDrawer';

function App() {
	return (
		<Box sx={{ bgcolor: '#F3F2EE' }} m={0}>
			<AppDrawer>
				<Outlet />
			</AppDrawer>
		</Box>
	);
}

export default App;
