import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import Headline from 'components/shared/Headline/Headline';
import Image from './components/Image/Image';
import Details from './components/Details/Details';
import Reviews from './components/Reviews/Reviews';
import Courses from './components/Courses/Courses';
import SpinnerFullPage from 'components/shared/SpinnerFullPage/SpinnerFullPage';

import Container from 'components/Container';

import styles from './schoolDetails.module.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSchoolById, getRatingsBySchoolUid, getReviewsBySchoolUid, checkIfUserCanEdit } from 'services/firestoreService';
import { useAuthContext } from 'contexts/authContext';
import { USER_ROLES } from 'CONSTANTS';

const SchoolDetails = () => {
  const [school, setSchool] = useState(null);
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [userCanEdit, setUserCanEdit] = useState(false);
  const { user } = useAuthContext();

  const schoolUid = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const fetchedSchool = await getSchoolById(schoolUid);
        if (!fetchedSchool) {
          throw new Error('School not found');
        }
        setSchool(fetchedSchool);

      } catch (error) {
        navigate('/notfound', { replace: true });
      }
    };
    fetchSchool();
  }, [schoolUid, userCanEdit, user]);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const fetchedRating = await getRatingsBySchoolUid(schoolUid);
        setRating(fetchedRating);
      } catch (error) {
        throw new Error(error);
      }
    };
    
    fetchRating();
  }, [schoolUid, userCanEdit, user]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchedReviews = await getReviewsBySchoolUid(schoolUid);
        setReviews(fetchedReviews);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchReviews();
  }, [schoolUid, userCanEdit, user]);

  useEffect(() => {
    const fetchCanEdit = async () => {
      try {
        const fetchCanEdit = await checkIfUserCanEdit(user.uid, schoolUid);
        setUserCanEdit(fetchCanEdit);
      } catch (error) {
        throw new Error(error);
      }
    };

    if (school &&
      user &&
      school.ownerUid !== user.uid &&
      user.role !== USER_ROLES.school) {
      fetchCanEdit();
    }

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
              <Headline logoUrl={school.logoUrl} />
            </Container>
          </Box>
          <Container paddingY={{ xs: 2, sm: 2.5 }}>
            <Box>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid item xs={12} md={7}>
                  <Image
                    mainImage={school.mainImage}
                    supportImages={school.supportImages}
                    name={school.name} />
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
              schoolName={school.name}
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
