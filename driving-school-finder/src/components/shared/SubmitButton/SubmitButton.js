import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const SubmitButton = ({ children, isLoading = false, startIcon, color = 'primary' }) => {

  return (
    <Button
      size='large'
      variant='contained'
      type='submit'
      color={color}
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