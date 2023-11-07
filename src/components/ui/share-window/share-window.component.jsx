// Importing necessary Material UI components, icons, and hooks.
import { Box, Paper, Grid, Typography, Divider, useMediaQuery, useTheme, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, FacebookIcon, WhatsappIcon, TwitterIcon } from "react-share";
// Custom component to prevent event propagation.
import StopPropagationWrapper from "../stop-propagation-wrapper/stop-propagation-wrapper.component";

// ShareWindow component responsible for rendering the share options in a popup.
const ShareWindow = ({ x, y, onClose, recipe }) => {

  // Constructing the URL to be shared based on the recipe details.
  const shareUrl = `${window.location.origin}/recipe/${recipe.recipeId}`;

  const theme = useTheme();
  let isXSmall = useMediaQuery(theme.breakpoints.down('sm'));

  // The component returns a styled Box component that centers the Paper element, which serves as the popup.
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Paper elevation={6}
        sx={{
          position: 'fixed',
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(54%, -97%)',
          backgroundColor: 'rgba(235, 235, 235, 0.97)',
          padding: '20px',
          zIndex: 1000
        }}
      >
        {/* Close button to dismiss the popup */}
        <IconButton
          aria-label="close-share-window"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          sx={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            width: '20px',
            height: '20px',
            backgroundColor: '#f44336',  
            '&:hover': {
              backgroundColor: '#e53935',  
            },
          }}
        >
          <CloseIcon sx={{ color: '#ffffff', fontSize: '18px' }} />
        </IconButton>

        {/* Main content container */}
        <Grid container direction="column" spacing={3}>
          {/* Conditionally rendered title row for larger screens */}
          {!isXSmall && (
            <Grid item xs={12}>
              <Box>
                <Typography variant="h7" align="left">Share <b>{recipe.title}</b>!</Typography>
              </Box>
            </Grid>
          )}

          {/* Divider for visual separation, shown only on larger screens */}
          {!isXSmall && (
            <Grid item xs={12}>
              <Divider sx={{ marginTop: -2, marginBottom: -2 }} />
            </Grid>
          )}

          {/* Social share buttons */}
          <Grid item xs={12}>
            <Box p={0}>
              {/* Responsive container for share buttons */}
              <Grid container spacing={2} direction={isXSmall ? "column" : "row"} justifyContent="space-between">
                {/* Facebook share button */}
                <Grid item>
                  <StopPropagationWrapper>
                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                  </StopPropagationWrapper>
                </Grid>
                {/* WhatsApp share button */}
                <Grid item>
                  <StopPropagationWrapper>
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                  </StopPropagationWrapper>
                </Grid>
                {/* Twitter share button */}
                <Grid item>
                  <StopPropagationWrapper>
                    <TwitterShareButton url={shareUrl}>
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                  </StopPropagationWrapper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

// Making ShareWindow available for import into other components.
export default ShareWindow;
