import { Component ,OnInit } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.services';

@Component({
  selector: 'app-aarticle-list',
  templateUrl: './aarticle-list.component.html',
  styleUrls: ['./aarticle-list.component.css']
})
export class AarticleListComponent implements OnInit{

  articles: any[] = [];
  editingArticle: any = null;

  userId:string=''
  
  constructor(private articleService: ArticleService) {}

  setUserId(){
    this.userId=this.articleService.getUserIdFromToken()
    
  }

  token = localStorage.getItem('token')

  ngOnInit() {
    this.loadArticles();
    this.setUserId()
  }

  loadArticles() {
    this.articleService.getArticles().subscribe(
      (data) => {
        this.articles = data;
      },
      (error) => {
        console.error('Error fetching articles', error);
      }
    );
  }

  editArticle(article: any) {
    this.editingArticle = { ...article };
  }

  cancelEdit() {
    this.editingArticle = null;
  }

  saveEdit() {
    if (this.editingArticle) {
      this.articleService.updateArticle(
        this.editingArticle._id,
        this.editingArticle.title,
        this.editingArticle.content
      ).subscribe(
        (updatedArticle) => {
          const index = this.articles.findIndex(a => a._id === updatedArticle._id);
          if (index !== -1) {
            this.articles[index] = updatedArticle;
          }
          this.editingArticle = null;
        },
        (error) => {
          console.error('Error updating article', error);
        }
      );
    }
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id).subscribe(
      () => {
        this.articles = this.articles.filter(article => article._id !== id);
      },
      (error) => {
        console.error('Error deleting article', error);
      }
    );
  }

}
