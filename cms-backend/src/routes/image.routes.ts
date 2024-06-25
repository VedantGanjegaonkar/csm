import { Router } from 'express';
import multer from 'multer';
import { uploadImage } from '../controller/image.controller';
import Image from '../models/image.model';

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });
  
  router.post('/upload', upload.single('file'),uploadImage, (req :any, res : any) => {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }
    res.status(200).send({ message: 'File uploaded successfully' });
  });

  // Delete an image
router.delete('/delete/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    // Delete the file from the uploads folder
    const fs = require('fs');
    fs.unlink(image.path, (err:any) => {
      if (err) {
        console.error('Error deleting file:', err);
      }
    });

    // Remove the image from the database
    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});
 

// router.post('/upload', upload.single('image'), uploadImage);

export default router;
