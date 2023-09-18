import { Box, Paper, Grid, Typography, Divider } from "@mui/material";
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, FacebookIcon, WhatsappIcon, TwitterIcon } from "react-share";
import { useLocation } from "react-router-dom";

const ShareWindow = () => {
    const location = useLocation();
    const shareUrl = `${window.location.origin}${location.pathname}`;

    return (    
        <Box sx={{ display: 'flex', justifyContent: 'center', width:'100%' }}>
            <Paper elevation={6} sx={{ width: '20%', minHeight: '20%', backgroundColor:'#FCDDBC', padding:'20px' }}>
                <Grid container direction="column" spacing={3}>
                    {/* Row for Title */}
                    <Grid item xs={12}>
                        <Box >
                            <Typography variant="h6" align="left">Share Window</Typography>
                        </Box>
                    </Grid>

                    {/* Row for Divider */}
                    <Grid item xs={12}>
                        <Divider sx={{marginTop:-2,marginBottom:-2}} />
                    </Grid>

                    {/* Row for Social Share Buttons */}
                    <Grid item xs={12}>
                        <Box >
                            <Grid container spacing={2} justifyContent="space-between">
                                <Grid item ml={2}>
                                    <FacebookShareButton url={shareUrl}>
                                        <FacebookIcon size={32} round={true} />
                                    </FacebookShareButton>
                                </Grid>
                                <Grid item>
                                    <WhatsappShareButton url={shareUrl}>
                                        <WhatsappIcon size={32} round={true} />
                                    </WhatsappShareButton>
                                </Grid>
                                <Grid item mr={2}>
                                    <TwitterShareButton url={shareUrl}>
                                        <TwitterIcon size={32} round={true} />
                                    </TwitterShareButton>
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
