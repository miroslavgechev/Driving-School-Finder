import { useState } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

import { useTheme } from '@mui/material/styles';

import { REGIONS, CATEGORIES } from 'CONSTANTS';

import { downloadFile, uploadSchoolLogo } from 'services/firebaseStorageTest';

const SchoolForm = () => {
  const [image, setImage] = useState(null);

  const theme = useTheme();

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  //!Test upload of files
  const handleFileChange = async (event) => {
    // setImage(event.target.files[0]);
    await uploadSchoolLogo(event.target.files[0]);
    const url = await downloadFile('school/id-num/logo');
    setImage(url);
  };
  //!Test upoad of files end

  const handleDelete = () => {
    setImage(null);
  };

  return (
    <Box>
      <form>
        <Grid container spacing={4}>

          <Grid item xs={12} sm={8}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Въведи името
            </Typography>
            <TextField
              label="Име на автошколата *"
              variant="outlined"
              name={'name'}
              fullWidth
            />
          </Grid>

          <Grid item container xs={12} sm={4} display={'flex'} justifyContent={'center'}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-end' }}
              alignContent={{ sm: 'center' }}
              justifyContent={'center'}
              width={1}
              marginBottom={{ xs: 0, sm: 0.5 }}
            >

              {image
                ?
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  alignSelf={'center'}
                >
                  <img src={image} alt="Main" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
                  <Button onClick={() => handleDelete()}>Изтрий</Button>
                </Box>
                :
                <Button
                  variant="contained"
                  component="label"
                  size={'large'}
                  startIcon={<AddPhotoAlternateOutlinedIcon />}
                  fullWidth
                  onChange={handleFileChange}
                >
                  Избери лого
                  <input
                    type="file"
                    hidden
                    name='logo'
                    accept="image/*"
                  />
                </Button>
              }
            </Box>

          </Grid>

          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Напишете кратко описание на автошколата
            </Typography>
            <TextField
              label="Описание *"
              variant="outlined"
              name={'description'}
              multiline
              rows={3}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Въведи до три причини да изберат твоята автошкола
            </Typography>
            <TextField
              label="Първа причина"
              variant="outlined"
              name={'whyUs1'}
              multiline
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Втора причина"
              variant="outlined"
              name={'whyUs2'}
              multiline
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Трета причина"
              variant="outlined"
              name={'whyUs3'}
              multiline
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Избери районите, които обслужва автошколата
            </Typography>
            <Autocomplete
              multiple
              disableCloseOnSelect
              color='primary'
              options={['Всички', ...REGIONS]}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    label={option}
                    {...getTagProps({ index })}
                    color='primary'
                  />
                ))
              }
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    checked={selected}
                  />
                  {option}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} name='regionsServed' label="Райони *" />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Избери категориите, които предлага автошколата
            </Typography>
            <Autocomplete
              multiple
              disableCloseOnSelect
              options={CATEGORIES}
              color='secondary'
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    label={option}
                    {...getTagProps({ index })}
                    color='secondary'
                  />
                ))
              }
              renderOption={(props, option, { selected }) => (
                <li style={{ backgroundColor: selected ? theme.palette.secondary.light : undefined }} {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    checked={selected}
                    color='secondary'
                    style={{ color: theme.palette.secondary.main }}
                  />
                  {option}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} name='categoriesServed' label="Категории *" />
              )}
            />
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

export default SchoolForm;
