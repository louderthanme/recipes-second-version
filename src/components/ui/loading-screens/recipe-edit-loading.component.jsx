import { Paper, Box, Grid,Skeleton } from "@mui/material";

const RecipeEditLoading = () => {
    return (
        <Paper elevation={10} sx={{ backgroundColor: '#FCDDBC', border: '0 0 0 20px solid white' }}>
          <Box p={6}>
            <Skeleton variant="text" width={210} height={40} />
            <Skeleton variant="rectangular" width="100%" height={50} />
            <Skeleton variant="rectangular" width="100%" height={50} />
            <Skeleton variant="rectangular" width="100%" height={50} />
            <Skeleton variant="rectangular" width="100%" height={50} />
            <Skeleton variant="rectangular" width="100%" height={50} />
            <Skeleton variant="rectangular" width="100%" height={50} />
            <Grid container spacing={1} justifyContent="center" mt={5}>
              <Grid item xs={5}>
                <Skeleton variant="rectangular" width="100%" height={50} />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <Skeleton variant="rectangular" width="100%" height={50} />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      );
    }

export default RecipeEditLoading;
        