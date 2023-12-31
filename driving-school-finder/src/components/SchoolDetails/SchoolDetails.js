import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import { useParams, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Container from 'layouts/Container/Container';
import Headline from 'components/shared/Headline/Headline';
import Image from './components/Image/Image';
import Details from './components/Details/Details';
import Reviews from './components/Reviews/Reviews';
import Courses from './components/Courses/Courses';
import SpinnerFullPage from 'components/shared/SpinnerFullPage/SpinnerFullPage';

import { getSchoolById, getRatingsBySchoolUid, getReviewsBySchoolUid, checkIfUserCanEdit } from 'services/firestoreService';
import { useAuthContext } from 'contexts/authContext';
import { ROUTES, USER_ROLES } from 'CONSTANTS';
import styles from './schoolDetails.module.css';

const SchoolDetails = () => {
  const [school, setSchool] = useState(null);
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [userCanEdit, setUserCanEdit] = useState(false);
  const { user } = useAuthContext();

  const schoolUid = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const fetchedSchool = await getSchoolById(schoolUid);
        if (!fetchedSchool) {
          throw new Error('School not found');
        }
        setSchool(fetchedSchool);

        const fetchedRating = await getRatingsBySchoolUid(schoolUid);
        setRating(fetchedRating);

        const fetchedReviews = await getReviewsBySchoolUid(schoolUid);
        setReviews(fetchedReviews);

        if (fetchedSchool &&
          user &&
          fetchedSchool.ownerUid !== user.uid &&
          user.role !== USER_ROLES.school) {
          const fetchCanEdit = await checkIfUserCanEdit(user.uid, schoolUid);
          setUserCanEdit(fetchCanEdit);
        }

      } catch (error) {
        navigate(ROUTES.notFound(), { replace: true });
      }
    };

    fetchSchool();
  }, [schoolUid, userCanEdit, user]);

  return (
    <>
      {(!school || !rating || !reviews) &&
        <SpinnerFullPage />
      }

      {school && rating && reviews &&
        <>
          <Box bgcolor='alternate.main' sx={{ marginBottom: { xs: 2, sm: 2.5 } }}>
            <Container paddingY={{ xs: 2, sm: 2.5 }}>
              <Headline logoUrl={school?.logoUrl} />
            </Container>
          </Box>

          <Container paddingY={{ xs: 2, sm: 2.5 }}>
            <Box>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid item xs={12} md={7}>
                  <Image
                    mainImage={school?.mainImage}
                    supportImages={school?.supportImages}
                    name={school?.name} />
                </Grid>
                <Grid item xs={12} md={5}>
                  <Details school={school} rating={rating} />
                </Grid>
              </Grid>
            </Box>
          </Container>

          <Container paddingY={4} id='table'>
            <Divider className={styles.divider} />
          </Container>

          <Courses school={school} />

          <Container paddingY={4} id='reviews'>
            <Divider />
          </Container>

          <Container paddingY={{ xs: 2, sm: 2.5 }}>
            <Reviews
              schoolUid={schoolUid}
              schoolName={school?.name}
              userCanEdit={userCanEdit}
              setUserCanEdit={setUserCanEdit}
              reviews={reviews}
              rating={rating}
            />
          </Container>
        </>}
    </>
  );
};

export default SchoolDetails;
