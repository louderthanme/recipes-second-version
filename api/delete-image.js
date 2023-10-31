import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async (req, res) => {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Only DELETE requests are allowed' });
  }

  const { publicId } = req.body;

  try {
    const result = await cloudinary.uploader.destroy(publicId);
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Delete image failed' });
  }
};
