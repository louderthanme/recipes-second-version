import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  

  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  
  const upload = multer({ storage });

  const multerUploads = upload.array('image', 12);

  export default async (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    new Promise((resolve, reject) => {
        multerUploads(req, res, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      })
      .then(async () => {  
        const files = req.files;

        if (!files || files.length === 0) {
          return res.status(400).json({ message: 'No files uploaded' });
        }
    
        let imageUrls = [];
    
        for (let file of files) {
          const fileType = file.mimetype;
          if (fileType !== 'image/png' && fileType !== 'image/jpeg') {
            return res.status(400).json({ message: 'Only PNG and JPEG file types are allowed' });
          }
    
          try {
            const result = await cloudinary.uploader.upload(file.path);
            console.log(`Cloudinary URL: ${result.url}`);
            imageUrls.push(result.url);
          } catch (error) {
            console.log(`Error while uploading to Cloudinary:`, error);
            return res.status(500).json({ message: 'Upload failed' });
          }
        }
    
        res.status(200).json({ message: 'Upload successful', imageUrls });
      })
      .catch((err) => {
        console.error("Error with file upload:", err);
        res.status(500).json({ message: 'Upload failed due to internal error' });
      });
}
