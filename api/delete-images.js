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

  const { publicIds } = req.body;

  try {
    const result = await cloudinary.api.delete_resources(publicIds);
    console.log(`Delete result: `, result);
    res.status(200).json({ message: 'Images deleted successfully' });
  } catch (error) {
    console.log(`Error while deleting images from Cloudinary:`, error);
    res.status(500).json({ message: 'Delete images failed' });
  }
};
