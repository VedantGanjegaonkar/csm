import { Router } from 'express';
import { getImages } from '../controller/image.controller';

const router = Router();

  
router.get('/', getImages)
 



export default router;
