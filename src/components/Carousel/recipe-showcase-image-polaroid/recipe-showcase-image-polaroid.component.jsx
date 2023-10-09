import React, { useState } from 'react';
import { Box, Skeleton } from "@mui/material";

const RecipeShowcaseImagePolaroid = ({ image, title, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

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
            <img 
                src={image} 
                alt={title} 
                onLoad={() => setImageLoaded(true)} 
                style={{width: '100%', height: 'auto', display: imageLoaded ? 'block' : 'none'}}
            />

            {!imageLoaded && 
                <Box 
                    sx={{ 
                        position: 'relative',
                        width: '100%',
                        paddingBottom: '70%', // 3:4 aspect ratio only while loading
                    }}
                >
                    <Skeleton 
                        variant="rectangular" 
                        width="100%" 
                        height="100%" 
                        style={{position: 'absolute', top: 0, left: 0}} 
                    />
                </Box>
            }
        </Box>  
    );
}

export default RecipeShowcaseImagePolaroid;
