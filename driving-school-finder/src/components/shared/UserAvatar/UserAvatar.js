
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import styles from './userAvatar.module.css';

const UserAvatar = ({ firstName, lastName, role }) => {

  const color = role === 'student' ? 'primary.main' : 'secondary.main';

  return (
    <Box marginLeft={4}>
      <IconButton>
        <Link to='/account' className={styles.link}>
          <Avatar sx={{ bgcolor: color }} className={styles.avatar}>
            {firstName.charAt(0)}{lastName.charAt(0)}
          </Avatar>
        </Link>
      </IconButton>
    </Box>
  );
};

export default UserAvatar;