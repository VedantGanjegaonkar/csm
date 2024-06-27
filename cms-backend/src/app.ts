import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import uploadRoutes from './routes/image.routes';
import  getImagesRoutes  from './routes/getImage.routes';
import authRoutes from './routes/auth.routes';
import articleRoutes from './routes/article.Routes';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', uploadRoutes);

app.use('/api/getImages',getImagesRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/articles', articleRoutes);


const mongoUri = 'mongodb://localhost:27017/csm';
mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

export default app;
