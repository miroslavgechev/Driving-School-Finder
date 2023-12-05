import Dialog from '@mui/material/Dialog';
import DialogContentTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

import { useState } from 'react';

import styles from './deleteFeedback.module.css';
import { deleteReviewByReviewId } from 'services/firestoreService';

const DeleteFeedbackForm = ({ reviewToDelete, setReviewToDelete, open, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleDeleteReview = async () => {
    try {
      setIsLoading(true);
      await deleteReviewByReviewId(reviewToDelete.id, reviewToDelete.schoolId);
      setReviewToDelete(null);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='sm'
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 2,
        },
      }}
    >
      <DialogContent>
        <DialogContentTitle variant='h6' className={styles.headerText} >
          Искаш ли да изтриеш отзива?
        </DialogContentTitle>
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <Button
          className={styles.button}
          size='large'
          variant='contained'
          disabled={isLoading}
          onClick={handleClose}
        >
          Не
        </Button>
        <Button
          className={styles.button}
          size='large'
          color='error'
          variant='contained'
          disabled={isLoading}
          startIcon={isLoading
            ?
            <CircularProgress size={22} />
            :
            <CloudUploadOutlinedIcon />}
          onClick={() => handleDeleteReview()}>
          Да
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteFeedbackForm;