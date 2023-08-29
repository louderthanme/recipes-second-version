import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';

const app = express();
app.use(cors());

cloudinary.config({
  cloud_name: 'recipeb00k',
  api_key: '212433614513653',
  api_secret: 'EaUfJb9tRhV6dt_dT2iQz8Zo4WQ',
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

app.post('/api/upload', upload.single('image'), async (req, res) => {
  console.log('Inside the upload route.');
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(`Cloudinary URL: ${result.url}`);
    res.status(200).json({ message: 'Upload successful', imageUrl: result.url });
  } catch (error) {
    console.log(`Error while uploading to Cloudinary:`, error);
    res.status(500).json({ message: 'Upload failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
