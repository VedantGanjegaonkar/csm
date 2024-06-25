import { Request, Response } from 'express';
import Image from '../models/image.model';

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const image = new Image({
      filename: file.filename,
      path: file.path,
      size: file.size,
      mimetype: file.mimetype,
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
