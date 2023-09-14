import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

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

app.use((req, res, next) => {
  console.log(`New request received: ${req.method} ${req.originalUrl}`);
  next();
});
app.use(express.json());

app.post('/api/upload', upload.array('image', 12), async (req, res) => {
  console.log('Inside the multi-upload route.');
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
});



app.delete('/api/delete-image', async (req, res) => {
  console.log('Inside the delete image route.');
  console.log('req.body:', req.body);  // Debug statement to log req.body
  const { publicId } = req.body;
  
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log(`Delete result: `, result);
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.log(`Error while deleting image from Cloudinary:`, error);
    res.status(500).json({ message: 'Delete image failed' });
  }
});

app.delete('/api/delete-images', async (req, res) => {
  console.log('Inside the delete images route.');
  console.log('req.body:', req.body);  // Debug statement to log req.body
  const { publicIds } = req.body;
  try{
    const result = await cloudinary.api.delete_resources(publicIds);
    console.log(`Delete result: `, result);
    res.status(200).json({ message: 'Images deleted successfully' });
  } catch (error) {
    console.log(`Error while deleting images from Cloudinary:`, error);
    res.status(500).json({ message: 'Delete images failed' });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
