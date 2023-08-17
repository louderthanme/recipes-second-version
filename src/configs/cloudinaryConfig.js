import {Cloudinary} from "@cloudinary/url-gen";

const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME;

const cld = new Cloudinary({
    cloud: {
        cloudName: cloudinaryName
    }
});

export default cld;