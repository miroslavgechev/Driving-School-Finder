
import Box from '@mui/material/Box';
import Container from 'layouts/Container/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';

import { Fragment, useEffect, useState } from 'react';

import SpinnerFullPage from 'components/shared/SpinnerFullPage/SpinnerFullPage';
import Headline from '../shared/Headline/Headline';

import { getFaq } from '../../services/firestoreService';
import styles from './faq.module.css';

const Faq = () => {
  const [faq, setFaq] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const fethechedFaq = await getFaq();
        setFaq(fethechedFaq);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFaq();
  }, []);

  const theme = useTheme();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {!faq && <SpinnerFullPage />}

      {faq &&
        <>
          <Box bgcolor='alternate.main' >

            <Container paddingY={{ xs: 2, sm: 2.5 }}>
              <Headline text='Често задавани въпроси' />
            </Container>
          </Box>
          <Container>
            {faq?.map((faqItem, index) => (
              <Fragment key={index} >
                <Box marginBottom={2}>
                  <Typography className={styles.headerText} variant='h5'>
                    {faqItem.categoryTitle}
                  </Typography>
                </Box>

                <Box marginBottom={6}>
                  {faqItem?.content?.map((item, i) => (
                    <Box
                      component={Accordion}
                      key={faqItem?.id + i}
                      padding={1}
                      marginBottom={i === item.length - 1 ? 0 : 2}
                      borderRadius={`${theme.spacing(1)} !important`}
                      className={styles.accordion}
                      expanded={expanded === `panel${faqItem?.id + i}`}
                      onChange={handleChange(`panel${faqItem?.id + i}`)}
                    >
                      <Box
                        component={AccordionSummary}
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <Typography
                          className={styles.accordionHeader}
                        >
                          {item.question}
                        </Typography>
                      </Box>
                      <AccordionDetails>
                        <Typography
                          className={styles.accordionText}
                          color="text.secondary"
                        >
                          {item.answer}
                        </Typography>
                      </AccordionDetails>
                    </Box>
                  ))}
                </Box>
              </Fragment>
            ))}
          </Container>
        </>
      }
    </>
  );
};

export default Faq;