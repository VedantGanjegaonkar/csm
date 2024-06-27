import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ContentListComponent } from './main/content-list/content-list.component';
import { ContentComponent } from './main/content-list/content/content.component';
import { ArticleListComponent } from './main/article-list/article-list.component';
import { ArticleEditorComponent } from './main/article-list/article-editor/article-editor.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    MainComponent,
    ContentListComponent,
    ContentComponent,
    ArticleListComponent,
    ArticleEditorComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  exports:[
    ContentListComponent
  ]
})
export class PageModule { }
