import { Router } from 'express';
import multer from 'multer';
import { uploadImage } from '../controller/image.controller';

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

 

// router.post('/upload', upload.single('image'), uploadImage);

export default router;
