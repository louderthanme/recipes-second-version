import { Box, Paper, Grid, Typography, Divider, useMediaQuery, useTheme, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, FacebookIcon, WhatsappIcon, TwitterIcon } from "react-share";
import { useLocation } from "react-router-dom";
import StopPropagationWrapper from "../stop-propagation-wrapper/stop-propagation-wrapper.component";

const ShareWindow = ({ x, y, onClose, recipe }) => {
  const location = useLocation();
  const shareUrl = `${window.location.origin}${location.pathname}`;
  const theme = useTheme();
  let isXSmall = useMediaQuery(theme.breakpoints.down('sm'));


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
        <IconButton
          aria-label="close-share-window"
          onClick={(e) => {
            e.stopPropagation();
            onClose()
          }}
          sx={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            width: '20px',
            height: '20px',
            backgroundColor: '#f44336',  // Or any color you prefer
            '&:hover': {
              backgroundColor: '#e53935',  // Or any color you prefer
            },
          }}
        >
          <CloseIcon sx={{ color: '#ffffff', fontSize: '18px' }} />
        </IconButton>

        <Grid container direction="column" spacing={3}>
          {/* Row for Title */}
          {!isXSmall && (
            <Grid item xs={12}>
              <Box>
                <Typography variant="h7" align="left">Share <b>{recipe.title}</b>!</Typography>
              </Box>
            </Grid>
          )}

          {/* Row for Divider */}
          {!isXSmall && (
            <Grid item xs={12}>
              <Divider sx={{ marginTop: -2, marginBottom: -2 }} />
            </Grid>
          )}

          {/* Row for Social Share Buttons */}
          <Grid item xs={12}>
            <Box p={0}>
              <Grid container spacing={2} direction={isXSmall ? "column" : "row"} justifyContent="space-between">
                <Grid item>
                  <StopPropagationWrapper>
                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                  </StopPropagationWrapper>
                </Grid>
                <Grid item>
                  <StopPropagationWrapper>
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                  </StopPropagationWrapper>
                </Grid>
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

export default ShareWindow;
