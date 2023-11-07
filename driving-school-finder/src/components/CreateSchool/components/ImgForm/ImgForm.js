import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';


export const ImgForm = () => {

  const [files, setFiles] = useState({ mainImage: null, images: [] });

  const handleFileChange = (event) => {
    if (event.target.name === 'mainImage') {
      setFiles({ ...files, mainImage: event.target.files[0] });
    } else if (event.target.files.length > 4) {
      alert('Можеш да качиш максимум 4 снимки'); //TODO Replace with Snackbar
    } else {
      setFiles({ ...files, images: [...event.target.files] });
    }

    event.target.value = null; // Clear the selected files
  };

  const handleDelete = (prop) => {
    if (prop === 'mainImage') {
      setFiles({ ...files, mainImage: null });
    } else {
      const newImages = Array.from(files.images).filter((_, i) => i !== prop);
      setFiles({ ...files, images: newImages });
    }
  };

  return (
    //TODO Add logic to check how many photos were uploaded
    <Box>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant={'subtitle2'}
              fontWeight={700}
            >
              Качи снимки
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>

            <Button
              variant="contained"
              component="label"
              size={'large'}
              startIcon={<AddPhotoAlternateOutlinedIcon />}
              fullWidth
            >
              Избери основна снимка
              <input
                type="file"
                hidden
                name='mainImage'
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />

            </Button>

          </Grid>
          <Grid item xs={12} sm={6}>

            <Button
              variant="contained"
              component="label"
              size={'large'}
              startIcon={<AddPhotoAlternateOutlinedIcon />}
              fullWidth
            >
              Избери до 4 допълнителни снимки
              <input
                type="file"
                hidden
                name='images'
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
          </Grid>
          <Grid item container xs={12} sm={12} display={'flex'} gap={'1em'} justifyContent={'center'}>
            {files.mainImage &&
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <img src={URL.createObjectURL(files.mainImage)} alt="Main" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
                <Button onClick={() => handleDelete('mainImage')}>Изтрий</Button>
              </Box>
            }
            {files.images.length > 0 && Array.from(files.images).map((file, index) => (
              <Box
                key={index}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <img src={URL.createObjectURL(file)} alt={`Additional ${index}`} style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
                <Button onClick={() => handleDelete(index)}>Изтрий</Button>
              </Box>
            ))}
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              margin={'0 auto'}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>

              </Box>
              <Button
                size={'large'}
                variant={'contained'}
                type={'submit'}
                startIcon={<CloudUploadOutlinedIcon />}
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