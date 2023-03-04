import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { Loader } from './components/Loader';
import { router } from './routes';
import { theme } from './theme/mui';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			staleTime: 15 * 60 * 1000, // 15 minutes
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<SnackbarProvider>
					<RouterProvider router={router} fallbackElement={<Loader />} />
				</SnackbarProvider>
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>
);
