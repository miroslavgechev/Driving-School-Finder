
import Box from '@mui/material/Box';
import styles from './rightSidePhotoCover.module.css';

const RightSidePhotoCover = ({ imgSrc }) => {
  return (
    <Box className={styles.outerBox}>
      <Box className={styles.boxSize}>
        <Box className={styles.boxOverflow}>
          <Box className={styles.boxForm}>
            <Box className={styles.imgBox}>
              <Box
                component={'img'}
                src={imgSrc}
                className={styles.imgBox}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSidePhotoCover;