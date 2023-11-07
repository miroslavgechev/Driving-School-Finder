import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import { REGIONS } from 'CONSTANTS';

const ContactsForm = () => {

  return (
    <Box>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Град
            </Typography>
            <TextField
              variant="outlined"
              name={'city'}
              value={'София'}
              fullWidth
              disabled
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Район
            </Typography>
            <Autocomplete
              options={REGIONS}
              renderInput={(params) => (
                <TextField {...params} label='Район' name='region' variant="outlined" fullWidth
                  InputProps={{ ...params.InputProps }}
                />
              )}
            />

          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Въведи адрес
            </Typography>
            <TextField
              label="Адрес на автошколата *"
              variant="outlined"
              name={'street'}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Въведи имейл
            </Typography>
            <TextField
              label="Имейл за контакт *"
              variant="outlined"
              name={'email'}
              fullWidth
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              Въведи телефон
            </Typography>
            <TextField
              label="Телефон за контакт *"
              variant="outlined"
              name={'email'}
              fullWidth
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
    </Box>
  );
};

export default ContactsForm;
