import express from 'express';
import { ArticleController } from '../controller/article.controller';

const router = express.Router();
const articleController = new ArticleController();

router.get('/', articleController.getAllArticles);
router.post('/', articleController.createArticle);
router.delete('/:id', articleController.deleteArticle);
router.put('/:id', articleController.updateArticle);

export default router;