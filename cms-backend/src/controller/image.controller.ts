import { Request, Response } from 'express';
import Image from '../models/image.model';

import { AuthService } from '../service/auth.services';


const authService = new AuthService();

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const { file } = req;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    

    const userId=await authService.getUserId(token)
  
    
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const image = new Image({
      filename: file.filename,
      path: file.path,
      size: file.size,
      mimetype: file.mimetype,
      userId:userId
    });

    await image.save();
    res.status(201).json(image);
  } catch (error:any) {
    res.status(500).send(error.message);
  }
};

// Get all images
export const getImages= async(req: Request, res: Response) => {
    try {
      const images = await Image.find();
      res.json(images);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
