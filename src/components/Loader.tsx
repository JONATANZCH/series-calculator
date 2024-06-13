import { CircularProgress, Box } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
