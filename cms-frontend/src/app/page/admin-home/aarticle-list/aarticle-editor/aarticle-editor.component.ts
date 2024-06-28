import { Component } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.services';
@Component({
  selector: 'app-aarticle-editor',
  templateUrl: './aarticle-editor.component.html',
  styleUrls: ['./aarticle-editor.component.css']
})
export class AarticleEditorComponent {

    
  title: string = '';
  content: string = '';

  
  constructor(private articleService: ArticleService) {}

  saveArticle() {
    this.articleService.createArticle(this.title, this.content)
      .subscribe(
        (response) => {
          console.log('Article saved successfully', response);
          this.title = '';
          this.content = '';
        },
        (error) => {
          console.error('Error saving article', error);
        }
      );
  }

}
