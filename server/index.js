import express from 'express';
import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';


// Initialize cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'some_folder_name',
    format: async (req, file) => 'png', // supports promises as well
  },
});

const parser = multer({ storage: storage });

const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.send('Hello from the API!');
});

// New upload endpoint
app.post('/api/upload', parser.single('image'), (req, res) => {
  res.json({ file: req.file });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
