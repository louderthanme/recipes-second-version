import { Typography, Box} from "@mui/material";
import { AdvancedImage } from "@cloudinary/react";

const ImageForm = ({handleImageUpload, cloudinary, imagePublicId, uploadedImage}) => {
    return (
        <Box my={2}>
            <Typography variant="h5" fontWeight="bold">Image Upload</Typography>
            <input type="file" onChange={handleImageUpload} />
            {uploadedImage && <AdvancedImage cldImg={cloudinary.image(imagePublicId)} />}
        </Box>
    );
};

export default ImageForm;