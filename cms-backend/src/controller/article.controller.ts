import { Request, Response } from 'express';
import Article, { IArticle } from '../models/article.model';
import { AuthService } from '../service/auth.services';

const authService = new AuthService();
export class ArticleController {

  public async getAllArticles(req: Request, res: Response): Promise<void> {
    try {
      const articles: IArticle[] = await Article.find().sort({ createdAt: -1 });
      res.json(articles);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async createArticle(req: Request, res: Response): Promise<void> {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const userId=await authService.getUserId(token)

    const { title, content } = req.body;
    const article = new Article({
      title,
      content,
      userId
    });

    try {
      const newArticle: IArticle = await article.save();
      res.status(201).json(newArticle);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }

  public async deleteArticle(req: Request, res: Response): Promise<void> {
    try {
      await Article.findByIdAndDelete(req.params.id);
      res.json({ message: 'Article deleted successfully' });
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }


  public async updateArticle(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
      );

      if (!updatedArticle) {
        res.status(404).json({ message: 'Article not found' });
        return;
      }

      res.json(updatedArticle);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  }
}