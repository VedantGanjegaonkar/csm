import { Schema, model, Document } from 'mongoose';

interface IImage extends Document {
  filename: string;
  path: string;
  size: number;
  mimetype: string;
  userId?:Schema.Types.ObjectId
}

const imageSchema = new Schema<IImage>({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
  mimetype: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'RegisterModel', required: false }
});

const Image = model<IImage>('newImages', imageSchema);

export default Image;
