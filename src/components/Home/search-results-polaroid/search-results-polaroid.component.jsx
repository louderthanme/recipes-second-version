import { Box, IconButton } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import { blue, common } from '@mui/material/colors';
import { transformImage } from "../../../utils/utils";
import { useShareWindow } from "../../../hooks/useShareWindow";


const SearchResultsPolariod = ({ images, title, onClick }) => {

    const [handleShareClick, ShareWindowComponent] = useShareWindow();

    const transformedImage = transformImage(images[1], 300, 400);

    return (
        <Box
            sx={{
                position: 'relative',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: 'white'
            }}
            onClick={onClick}
            >
            <Box
                sx={{
                position: 'relative',  // New container with relative positioning
                img: {
                    maxWidth: '100%',
                    height: 'auto'
                }
                }}
            >
                <img src={transformedImage} alt={title} style={{ display: 'block' }} />
            
                <IconButton
                    aria-label="share-recipe"
                    size="small"
                    onClick={handleShareClick}
                    sx={{
                    position: 'absolute',
                    top: '95%',  
                    right: '-16px',
                    width: '24px',
                    height: '24px',
                    backgroundColor: blue[500],
                    '&:hover': {
                        backgroundColor: blue[700],
                    },
                    }}
                >
                <ShareIcon sx={{ color: common.white, fontSize: '14px' }} />
                </IconButton>
                {ShareWindowComponent()}
                
            </Box>
            
            <Box textAlign="center" mt={1} sx={{color:'black'}}>
                <b>{title}</b>
            </Box>
        </Box>
    )
}

export default SearchResultsPolariod;