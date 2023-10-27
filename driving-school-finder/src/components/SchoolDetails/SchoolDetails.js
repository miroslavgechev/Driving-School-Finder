import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import Headline from './components/Headline/Headline';
import Image from './components/Image/Image';
import Details from './components/Details/Details';
import Reviews from './components/Reviews/Reviews';

import Container from 'components/Container';

const mock = {
  id: 1,
  logoUrl: 'https://drive-school.eu/wp-content/uploads/2022/01/logo_OK.png',
  name: 'Автошкола Driving School - Граматикови',
  images: [
    'https://drive-school.eu/wp-content/uploads/2017/10/img-03.jpg',
    'https://drive-school.eu/wp-content/uploads/2023/02/01.jpg',
    'https://drive-school.eu/wp-content/uploads/2023/02/06.jpg',
    'https://drive-school.eu/wp-content/uploads/2023/02/07.jpg',
    'https://drive-school.eu/wp-content/uploads/2023/02/09.jpg',
  ],
  address: {
    city: 'София',
    region: 'Витоша',
    street: 'бул. “Цар Борис III” 365',
  },
  description:
    'Автошкола Driving School - Граматикови e създадена преди повече от 25 години. Сформиралият се с времето екип от висококвалифицирани преподаватели с дългогодишен професионален опит гарантира качествено и отлично обучение. Ние намираме индивидуален подход към всеки от клиентите си, с цел по–лесно и бързо изучаване на материала.',
  whyUs: [
    'Съвременнен кабинет със система за видео наблюдение и мултимедийно обучение, с което отговаря на всички европейски изисквания за теоретична подготовка.',
    'Eкип от висококвалифицирани преподаватели с дългогодишен професионален опит гарантира качествено и отлично обучение',
    'Автомобили  отлично техническо състояние, за което се грижат механиците в собствения ни сервиз'
  ],
  regionsServed: ['Витоша', 'Младост', 'Студентски'],
  categoriesServed: ['A', 'B'],
  email: 'info@drive-school.eu',
  phone: '+359888237935',
  reviews: [
    { fullName: 'Мирослав Гечев', date: '2023-03-25', reviewScore: 4, review: 'Справиха се добре, но има какво да се желае, най-вече откъм отношението.' },
    { fullName: 'Елена Иванова', date: '2023-01-25', reviewScore: 5, review: 'Най-добрите!' },
    { fullName: 'Елена Иванова', date: '2023-01-25', reviewScore: 5, review: 'Най-добрите!' },
    { fullName: 'Мирослав Гечев', date: '2023-03-25', reviewScore: 4, review: 'Справиха се добре, но има какво да се желае, най-вече откъм отношението.' },
    { fullName: 'Мирослав Гечев', date: '2023-03-25', reviewScore: 4, review: 'Справиха се добре, но има какво да се желае, най-вече откъм отношението.' },
    { fullName: 'Мирослав Гечев', date: '2023-03-25', reviewScore: 4, review: 'Справиха се добре, но има какво да се желае, най-вече откъм отношението.' },
  ], //TO DO - add ratings
  courses: [], //TO DO - add courses
  ratingScore: 4.4,
  ratingCount: 77,
};
const ProductOverview = () => {
  return (
    <>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline name={mock.name} logoUrl={mock.logoUrl} />
        </Container>
      </Box>
      <Container>
        <Box>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={7}>
              <Image images={mock.images} name={mock.name} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Details
                name={mock.name}
                description={mock.description}
                ratingScore={mock.ratingScore}
                ratingCount={mock.ratingCount}
                address={mock.address}
                email={mock.email}
                phone={mock.phone}
                whyUs={mock.whyUs}
                regionsServed={mock.regionsServed}
                categoriesServed={mock.categoriesServed}
                ratings={mock.ratings}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container paddingY={4} id="reviews">
        <Divider />
      </Container>
      <Container>
        <Reviews ratingCount={mock.ratingCount} ratingScore={mock.ratingScore} reviews={mock.reviews} />
      </Container>

    </>
  );
};

export default ProductOverview;
