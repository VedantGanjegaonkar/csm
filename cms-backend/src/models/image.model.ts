import { Schema, model, Document } from 'mongoose';

interface IImage extends Document {
  filename: string;
  path: string;
  size: number;
  mimetype: string;
}

const imageSchema = new Schema<IImage>({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
  mimetype: { type: String, required: true },
});

const Image = model<IImage>('Image', imageSchema);

export default Image;
