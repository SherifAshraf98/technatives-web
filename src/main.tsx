import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Loader } from './components/Loader';
import { router } from './routes';
import { theme } from './theme/mui';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} fallbackElement={<Loader />} />
		</ThemeProvider>
	</React.StrictMode>
);
