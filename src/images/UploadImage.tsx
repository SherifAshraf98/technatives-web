import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, TextField, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { theme } from '../theme/mui';
import { screenHeight } from '../utils/consts';

interface FormInitialValues {
	post: string;
	image: any;
}

export const UploadImage = () => {
	const validationSchema = Yup.object().shape({
		post: Yup.string().trim().required('Post description is required!'),
		image: Yup.mixed().required('Image is required, please select one!'),
	});

	const initialValues: FormInitialValues = {
		post: '',
		image: '',
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log('file: UploadImage.tsx:30 ~ UploadImage ~ values:', values);
			alert(JSON.stringify(values, null, 2));
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
						name="post"
						id="post"
						label="Enter post"
						value={formik.values.post}
						onChange={formik.handleChange}
						error={formik.touched.post && Boolean(formik.errors.post)}
						helperText={formik.touched.post && formik.errors.post}
					/>
					<Box display={'flex'} rowGap={2} flexDirection="column" my={2}>
						<Button
							variant="contained"
							component="label"
							// error={formik.touched.image && Boolean(formik.errors.image)}
							// helperText={formik.touched.image && formik.errors.image}
						>
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
						<Button type="submit" variant="contained" fullWidth>
							Submit
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	);
};
