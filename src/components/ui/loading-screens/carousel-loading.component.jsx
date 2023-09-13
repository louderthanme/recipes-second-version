import { Skeleton, Paper, Box } from "@mui/material";

const CarouselLoading = () => {
    return (
        <Paper elevation={4} sx={{ width: '70%', margin: '0 auto', padding: '20px', backgroundColor: '#66101F' }}>
          {/* Simulating 3 CarouselPolaroids in the loading state */}
          {[0].map((index) => (
            <Box key={index} sx={{ padding: '0 5px' }}>
              <Skeleton variant="rectangular"  height={200} />
            </Box>
          ))}
        </Paper>
        );
    }

export default CarouselLoading;