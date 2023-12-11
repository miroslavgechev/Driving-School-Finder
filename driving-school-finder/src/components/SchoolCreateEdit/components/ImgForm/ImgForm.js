import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import FormHelperText from '@mui/material/FormHelperText';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useEffect, useState } from 'react';

import CustomAlert from 'components/shared/CustomAlert/CustomAlert';

import { SUCCESS_STATES, CUSTOM_ALERT_SEVERITY } from 'CONSTANTS';
import { useSetSchoolContext } from 'contexts/setSchoolContext';
import fileMapper from 'utils/fileMapper';
import styles from './imgForm.module.css';

const validationSchema = yup.object({
  mainImage: yup
    .mixed()
    .required('Добавяне на основна снимка е задължително')
    .test('type', 'Логото трябва да бъде картинка', value => {
      if (typeof value === 'string') {
        return true;
      } else if (value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)) {
        return true;
      } else {
        return false;
      }
    }),
  supportImages: yup.array().of(
    yup
      .mixed()
      .test('type', 'Логото трябва да бъде картинка', value => {
        if (typeof value === 'string') {
          return true;
        } else if (value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)) {
          return true;
        } else {
          return false;
        }
      }),
    // .required('Добавяне на поне една допълнителна снимка е задължително')
  )
  // .min(1, 'Добавяне на поне една допълнителна снимка е задължително'),
});

export const ImgForm = () => {
  const [images, setImages] = useState({ mainImage: null, images: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState(SUCCESS_STATES.none);
  const { setSchoolImages, setSchoolFiles, school } = useSetSchoolContext();

  const initialValues = {
    mainImage: school?.mainImage || '',
    supportImages: school?.supportImages || [],
  };

  useEffect(() => {
    setImages({
      mainImage: school?.mainImage || null,
      supportImages: school?.supportImages || []
    });
  }, [school]);

  const handleSubmit = () => {
    setSuccessState(SUCCESS_STATES.error);
    try {
      formik.setStatus(null);
      setIsLoading(true);

      setSchoolImages(images);

      setTimeout(() => {
        setIsLoading(false);
        setSuccessState(SUCCESS_STATES.success);
      }, 500);
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setSuccessState(SUCCESS_STATES.error);
      }, 1000);
    }
  };

  const handleImageChange = async (event, name) => {
    setSuccessState(SUCCESS_STATES.error);

    if (name === 'mainImage') {

      setSchoolFiles(name, event.target.files[0]);
      formik.setFieldValue(name, event.target.files[0]);

      const url = await fileMapper([event.target.files[0]]);
      setImages(data => ({ ...data, mainImage: url[0] }));

    } else {

      const firstFourImages = Array.from(event.target.files).slice(0, 4);

      setSchoolFiles(name, firstFourImages);
      formik.setFieldValue(name, firstFourImages);

      const urlsArray = await fileMapper(firstFourImages);
      setImages(data => ({ ...data, supportImages: urlsArray }));

    }
  };

  const handleImageDelete = (prop) => {
    if (prop === 'mainImage') {
      setImages(data => ({ ...data, mainImage: null }));
      formik.setFieldValue('mainImage', '');
    } else {
      const newImages =
        Array
          .from(images.supportImages)
          .filter((_, i) => i !== prop);

      setImages(data => ({ ...data, supportImages: newImages }));
      formik.setFieldValue('supportImages', newImages);
    }

    setSuccessState(SUCCESS_STATES.error);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant='subtitle2'
              className={styles.headerText}
            >
              Качи снимки
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant='contained'
              component='label'
              size='large'
              startIcon={<AddPhotoAlternateOutlinedIcon />}
              fullWidth
            >
              Избери основна снимка
              <input
                type='file'
                hidden
                name='mainImage'
                multiple
                accept='image/*'
                onChange={(event) => handleImageChange(event, 'mainImage')}
              />

            </Button>
            {formik.errors.mainImage
              ?
              <FormHelperText error>
                {formik.touched.mainImage && formik.errors.mainImage}
              </FormHelperText>
              :
              null}
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant='contained'
              component='label'
              size='large'
              startIcon={<AddPhotoAlternateOutlinedIcon />}
              fullWidth
            >
              Избери до 4 допълнителни снимки
              <input
                type='file'
                hidden
                name='supportImages'
                multiple
                accept='image/*'
                onChange={(event) => handleImageChange(event, 'supportImages')}
              />
            </Button>
            {formik.errors.supportImages
              ?
              <FormHelperText error>
                {formik.touched.supportImages && formik.errors.supportImages}
              </FormHelperText>
              :
              null}
          </Grid>

          <Grid item container xs={12} sm={12} className={styles.imageContainer}>
            {images?.mainImage &&
              <Box className={styles.imageListContainer}>
                <img
                  src={images.mainImage}
                  alt="Main Image"
                  className={styles.image}
                />
                <Button
                  onClick={() => handleImageDelete('mainImage')}
                >
                  Изтрий
                </Button>
              </Box>
            }
            {images?.supportImages?.length > 0 &&
              Array
                .from(images.supportImages)
                .map((url, index) => (
                  <Box
                    key={index}
                    className={styles.imageListContainer}
                  >
                    <img
                      src={url}
                      alt={`Support Image ${index}`}
                      className={styles.image}
                    />
                    <Button
                      onClick={() => handleImageDelete(index)}
                    >
                      Изтрий
                    </Button>
                  </Box>
                ))}
          </Grid>

          <Grid item container xs={12}>
            <Box className={styles.buttonBoxContainer}>
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                {successState === SUCCESS_STATES.success &&
                  <CustomAlert severity={CUSTOM_ALERT_SEVERITY.success}>
                    Промените са запазени локално
                  </CustomAlert>
                }
                {successState === SUCCESS_STATES.error &&
                  <CustomAlert severity={CUSTOM_ALERT_SEVERITY.error}>
                    Промените не са запазени
                  </CustomAlert>
                }
              </Box>
              <Button
                size='large'
                variant='contained'
                type='submit'
                disabled={isLoading}
                startIcon={isLoading
                  ?
                  <CircularProgress size={22} />
                  :
                  <SaveOutlinedIcon />}
              >
                Запази промените
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box >
  );
};

export default ImgForm;