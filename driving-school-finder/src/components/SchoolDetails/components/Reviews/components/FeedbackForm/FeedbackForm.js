import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const mockFullName = {
  firstName: 'Мирослав',
  lastName: 'Гечев',
};

const FeedbackList = ({ onClose, open }) => {
  const [currentScore, setCurrentScore] = useState(3);

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={'sm'}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 2,
        },
      }}
    >
      <Box paddingY={2} paddingX={4}>
        <Box paddingY={2} display={'flex'} justifyContent={'space-between'}>
          <Typography variant={'h5'} fontWeight={700}>
            Дай оценка
          </Typography>
          <CloseOutlinedIcon
            onClick={onClose}
            sx={{ cursor: 'pointer' }}
          />
        </Box>

        <Box paddingY={2}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant={'subtitle1'} fontWeight={700} sx={{ marginBottom: 1 }}>
                  Даваш оценка като {mockFullName.firstName} {mockFullName.lastName}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>
                  Оценка
                </Typography>

                <Box display={'flex'} alignItems={'center'}>
                  <Rating
                    name="rating-feedback"
                    value={currentScore}
                    precision={1}
                    fontSize="inherit"
                    size="large"
                    onChange={(e, newValue) => setCurrentScore(newValue)}
                  />

                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={'subtitle2'} sx={{ marginBottom: 1 }}>

                </Typography>
                <TextField
                  label="Отзив *"
                  variant="outlined"
                  name={'feedback'}
                  fullWidth
                  multiline
                  rows={5}
                />
              </Grid>
              <Grid item container xs={12}>
                <Button size={'large'} variant={'contained'} type={'submit'}>
                  Изпрати
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Dialog>
  );
};

export default FeedbackList;
