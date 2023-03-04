import DeleteIcon from '@mui/icons-material/Delete';
import { LoadingButton } from '@mui/lab';
import { Button, IconButton, TextField, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { useUploadImage } from '../api/upload-image';
import { theme } from '../theme/mui';
import { screenHeight } from '../utils/consts';

interface FormInitialValues {
	caption: string;
	image: any;
}

export const UploadImage = () => {
	// mutations
	const { mutateAsync: addImage, isLoading } = useUploadImage();
	const { enqueueSnackbar } = useSnackbar();

	// form validation schema
	const validationSchema = Yup.object().shape({
		caption: Yup.string().trim().required('Caption is required!'),
		image: Yup.mixed().required('Image is required, please select one!'),
	});

	const initialValues: FormInitialValues = {
		caption: '',
		image: '',
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			console.log('file: UploadImage.tsx:30 ~ UploadImage ~ values:', values);
			const formData = new FormData();
			formData.append('file', values.image);
			formData.append('caption', values.caption);
			addImage(formData as any)
				.then(() => {
					enqueueSnackbar('Image saved successfully', { autoHideDuration: 2000, variant: 'success' });
					resetForm();
				})
				.catch(() => enqueueSnackbar('Error in saving post!', { autoHideDuration: 2000, variant: 'error' }));
		},
	});

	const mobile = useMediaQuery(() => theme.breakpoints.down('sm'));

	return (
		<Box
			display={'flex'}
			justifyContent="center"
			alignItems="center"
			flexDirection={'column'}
			minHeight={screenHeight(mobile)}
			px={1}
		>
			<Box width={'100%'} maxWidth={600}>
				<form onSubmit={formik.handleSubmit}>
					<TextField
						fullWidth
						name="caption"
						id="caption"
						label="Enter caption"
						value={formik.values.caption}
						onChange={formik.handleChange}
						error={formik.touched.caption && Boolean(formik.errors.caption)}
						helperText={formik.touched.caption && formik.errors.caption}
					/>
					<Box display={'flex'} rowGap={2} flexDirection="column" my={2}>
						<Button variant="contained" component="label">
							{formik.values.image ? 'Choose another image' : 'Upload image'}
							<input
								hidden
								accept="image/*"
								type="file"
								id="image"
								name="file"
								onChange={(e) => formik.setFieldValue('image', e.currentTarget.files?.[0])}
								value={''}
							/>
						</Button>
						{formik.touched.image && Boolean(formik.errors.image) && (
							<Typography sx={{ ml: 2, mt: -1 }} fontSize={'12px'} color={'#d32f2f'}>
								{formik.touched.image && formik.errors.image?.toString()}
							</Typography>
						)}
						{formik.values.image && (
							<Box display={'flex'} justifyContent="space-around" columnGap={2} flexWrap="wrap">
								<Box display={'flex'} flexDirection="column">
									<img height={'200'} src={URL.createObjectURL(formik.values.image)} />
									<Typography variant="caption">{formik.values.image.name}</Typography>
								</Box>
								<Box my={'auto'}>
									<IconButton
										aria-label="delete"
										size="large"
										color="error"
										onClick={() => formik.setFieldValue('image', '')}
									>
										<DeleteIcon fontSize="inherit" />
									</IconButton>
								</Box>
							</Box>
						)}
					</Box>
					<Box>
						<LoadingButton loading={isLoading} type="submit" variant="contained" fullWidth>
							Submit
						</LoadingButton>
					</Box>
				</form>
			</Box>
		</Box>
	);
};
