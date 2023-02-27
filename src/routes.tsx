import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { AppError } from './error/AppError';
import { ListImages } from './images/ListImages';
import { UploadImage } from './images/UploadImage';

export enum AppRoutePath {
	Home = '/',
	Upload = '/upload',
}

const routes: RouteObject[] = [
	{
		path: AppRoutePath.Home,
		element: <ListImages />,
		errorElement: <AppError />,
	},
	{
		path: AppRoutePath.Upload,
		element: <UploadImage />,
		errorElement: <AppError />,
	},
	// wild card, if the user entered a url that does not exist, redirect to the home page
	{
		path: '*',
		element: <Navigate to={`${AppRoutePath.Home}`} />,
	},
];
export const router = createBrowserRouter(routes);
