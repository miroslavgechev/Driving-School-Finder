import { Fragment } from 'react';

import Box from '@mui/material/Box';
import Container from 'components/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';

import Headline from '../shared/Headline/Headline';

import { FAQ } from '../../dbTemp';

import styles from './faq.module.css';

const Faq = () => {

  const mockContent = FAQ;

  const theme = useTheme();

  return (
    <>
      <Box bgcolor='alternate.main' >
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline text='Често задавани въпроси' />
        </Container>
      </Box>
      <Container>
        {mockContent.map((faq, index) => (
          <Fragment key={index}>
            <Box marginBottom={2}>
              <Typography className={styles.headerText} variant='h5'>
                {faq.title}
              </Typography>
            </Box>

            <Box marginBottom={6}>
              {faq.content.map((item, i) => (
                <Box
                  component={Accordion}
                  key={i}
                  padding={1}
                  marginBottom={i === item.length - 1 ? 0 : 2}
                  borderRadius={`${theme.spacing(1)} !important`}
                  className={styles.accordion}
                >
                  <Box
                    component={AccordionSummary}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography className={styles.accordionHeader}>{item.title}</Typography>
                  </Box>
                  <AccordionDetails>
                    <Typography className={styles.accordionText} color="text.secondary">{item.subtitle}</Typography>
                  </AccordionDetails>
                </Box>
              ))}
            </Box>
          </Fragment>
        ))}
      </Container>
    </>
  );
};

export default Faq;