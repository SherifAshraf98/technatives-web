import { useMutation, useQueryClient } from 'react-query';
import { CreateImageOutput, CreateImageBody } from './types';
import { Endpoints, HTTPMethods, request } from './utils';

export const useUploadImage = () => {
	const queryClient = useQueryClient();

	return useMutation<CreateImageOutput, Error, CreateImageBody>(
		[Endpoints.UPLOAD_IMAGE],
		(body: CreateImageBody) =>
			request({
				path: Endpoints.UPLOAD_IMAGE,
				method: HTTPMethods.POST,
				body,
				formData: true,
			}),
		{
			onSuccess: () => {
				queryClient.invalidateQueries([Endpoints.LIST_IMAGES], {
					exact: false,
				});
			},
		}
	);
};
