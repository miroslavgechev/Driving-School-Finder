import React from 'react';

import Container from 'components/Container';
import Hero from './components/Hero/Hero';
import Story from './components/Story/Story';

const About = () => {
  return (
    <>
      <Hero />

      <Container style={{ marginBottom: 40 }}>
        <Story />
      </Container>
    </>
  );
};

export default About;
