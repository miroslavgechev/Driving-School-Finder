import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const SubmitButton = ({ children, isLoading = false, startIcon }) => {

  return (
    <Button
      size='large'
      variant='contained'
      type='submit'
      disabled={isLoading}
      startIcon={isLoading
        ?
        <CircularProgress size={22} />
        :
        startIcon}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;