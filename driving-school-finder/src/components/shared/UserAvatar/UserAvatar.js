import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { Link } from 'react-router-dom';

import { ROUTES, USER_ROLES } from 'CONSTANTS';
import styles from './userAvatar.module.css';

const UserAvatar = ({ firstName, lastName, role }) => {
  const color = role === USER_ROLES.student ? 'primary.main' : 'secondary.main';

  return (
    <IconButton>
      <Link to={ROUTES.account()} className={styles.link}>
        <Avatar sx={{ bgcolor: color }} className={styles.avatar}>
          {firstName?.charAt(0)}{lastName?.charAt(0)}
        </Avatar>
      </Link>
    </IconButton>
  );
};

export default UserAvatar;