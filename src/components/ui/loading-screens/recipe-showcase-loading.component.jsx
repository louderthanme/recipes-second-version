import { Skeleton, Paper, Grid, Box, Divider } from "@mui/material";
import { displaysMaxHeight } from "../../../constants/constants";

const RecipeShowcaseLoading= () => {
    return (
        <Paper elevation={12} sx={{ backgroundColor: '#fdebd7', width: '70%',  padding: '10px', marginBottom: '30px', position: 'relative' }}>
          <Grid container justifyContent="center">
            {/* First Row */}
            <Grid item xs={12} sm={6}>
              <Box  
                  sx={{
                      mt: 2,  // default
                      '@media (max-width:960px)': {
                          mt: 5
                      }
                  }}
                >

                <Skeleton variant="rectangular" width="100%" height={350} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2} marginLeft={2} marginTop={4}>
                <Skeleton variant="text" width={300} height={30} />
                <Skeleton variant="text" width="100%" height={30} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Divider /> {/* You can keep the divider as-is */}
            </Grid>
            {/* Second Row */}
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <Skeleton variant="text" width="100%" height={displaysMaxHeight} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box p={2}>
                <Skeleton variant="text" width="100%" height={displaysMaxHeight} />
              </Box>
            </Grid>
          </Grid>
    
          <Grid>
            <Box p={1} display="flex" justifyContent="center" mb={4}>
              <Skeleton variant="rectangular" width={120} height={50} />
            </Box>
          </Grid>
        </Paper>
      );
    }
    
export default RecipeShowcaseLoading;