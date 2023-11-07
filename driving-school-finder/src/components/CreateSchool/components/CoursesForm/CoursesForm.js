import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import { TABLE_SUBTITLES } from 'CONSTANTS';

const subtitles = TABLE_SUBTITLES;

const courses = ['A', 'B'];

const CoursesForm = () => {

  return (
    <Box>
      <form>
        <Grid container spacing={4} paddingY={{ xs: 2, sm: 2.5 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead sx={{ bgcolor: 'alternate.dark' }}>
                <TableRow>
                  <TableCell />
                  {courses.map((item, i) => (
                    <TableCell key={i} sx={{ textAlign: 'center' }}>
                      <Typography
                        variant={'subtitle2'}
                        fontWeight={700}
                      >
                        Категория "{item}"
                      </Typography>
                    </TableCell>
                  ))}
                  <TableCell />
                </TableRow>
              </TableHead>

              <TableBody>
                {Object.entries(subtitles).map(([key, value]) => (
                  <TableRow
                    key={key}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0, bgcolor: 'text.alternate.dark' },
                      '&:nth-of-type(2n)': { bgcolor: 'alternate.main' },
                    }}
                  >
                    <TableCell sx={{ width: '20%' }} component="th" scope="row">
                      <Typography variant={'subtitle2'} fontWeight={700}>
                        {value}
                      </Typography>
                    </TableCell>

                    {courses.map((item, i) => (
                      <TableCell key={i + item} sx={{ textAlign: 'center' }}>

                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'1em'}>
                          <TextField
                            variant="outlined"
                            name={item + '_' + key}
                            sx={{ width: '50%' }}
                            inputProps={{ style: { textAlign: 'center' } }}
                          />
                          <Typography color={'text.secondary.contrastText'} variant={'subtitle2'} fontWeight={key === 'coursePrice' ? 900 : undefined} >
                            {item[key]} {item[key] == 'Безплатен' ? '' : key.startsWith('hours') ? 'часа' : 'лева'}
                          </Typography>
                        </Box>

                      </TableCell>
                    ))}

                    <TableCell>

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>
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
    </Box >);
};

export default CoursesForm;
