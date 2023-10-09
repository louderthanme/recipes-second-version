import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';

const CarouselLoading = () => {
  return (
    <Box sx={{ width: '82%', margin: '0 auto', padding: '10px', paddingX: '30px', overflow: 'hidden' }}>
      <Skeleton variant="rectangular" width="100%" height={300} animation="wave" />
    </Box>
  );
};

export default CarouselLoading;
