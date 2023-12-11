import Container from 'layouts/Container/Container';
import Hero from './components/Hero/Hero';
import Story from './components/Story/Story';
import styles from './about.module.css';

const About = () => {
  return (
    <>
      <Hero />

      <Container className={styles.storyContainer} >
        <Story />
      </Container>
    </>
  );
};

export default About;
