import mongoose, { Schema, Document } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  content?: string;
  userId: mongoose.Types.ObjectId;
  createdAt: Date;
}

const ArticleSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: false },
  userId: { type: Schema.Types.ObjectId, ref: 'RegisterModel', required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IArticle>('Article', ArticleSchema);