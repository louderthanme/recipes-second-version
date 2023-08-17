import {Cloudinary} from "@cloudinary/url-gen";

const cloudinaryName = import.meta.env.VITE_REACT_APP_CLOUDINARY_NAME;

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: cloudinaryName
    }
});

export default cloudinary;