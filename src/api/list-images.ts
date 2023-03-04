import { useQuery } from 'react-query';
import { GetImagesOutput, GetImagesParams } from './types';
import { WithMetaData } from './types/shared';
import { Endpoints, HTTPMethods, request } from './utils';

export const useGetImages = (searchParams?: GetImagesParams) => {
	return useQuery<WithMetaData<GetImagesOutput[]>, Error>([Endpoints.LIST_IMAGES, searchParams?.page], () =>
		request({
			path: Endpoints.LIST_IMAGES,
			method: HTTPMethods.GET,
			searchParams,
			getMetaData: true,
		})
	);
};
