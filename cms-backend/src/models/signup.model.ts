import { Mongoose,Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    _id: Schema.Types.ObjectId; 
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  acceptTerms: boolean;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  acceptTerms: { type: Boolean, required: true }
});

export const RegisterModel = model<IUser>('RegisterModel', userSchema);
