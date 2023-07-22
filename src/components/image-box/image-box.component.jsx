import { Box } from "@mui/material";

const ImageBox = ({ image }) => {
  return (
    <Box> 
      <img src={image} alt="Recipe" style={{ maxWidth: '100%', height: 'auto', borderRadius:'.5em', border:'.5em solid white'}} />
    </Box>
  );
};

export default ImageBox;
