import { Component } from '@angular/core';
import { ArticleService } from 'src/app/core/services/article.services';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent {


  
  title: string = '';
  content: string = '';

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['link', 'image', 'video']
    ]
  };
  

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