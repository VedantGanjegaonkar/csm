import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ContentListComponent } from './main/content-list/content-list.component';
import { ContentComponent } from './main/content-list/content/content.component';
import { ArticleListComponent } from './main/article-list/article-list.component';
import { ArticleEditorComponent } from './main/article-list/article-editor/article-editor.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { QuillModule } from 'ngx-quill';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AarticleListComponent } from './admin-home/aarticle-list/aarticle-list.component';
import { AarticleEditorComponent } from './admin-home/aarticle-list/aarticle-editor/aarticle-editor.component';
import { pageRoutingModule } from './page-routing.module';


@NgModule({
  declarations: [
    MainComponent,
    ContentListComponent,
    ContentComponent,
    ArticleListComponent,
    ArticleEditorComponent,
    AdminHomeComponent,
    AarticleListComponent,
    AarticleEditorComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    pageRoutingModule,
    QuillModule.forRoot()
  ],
  exports:[
    ContentListComponent
  ]
})
export class PageModule { }
