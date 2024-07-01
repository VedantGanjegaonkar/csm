import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from '../upload/upload.component';
import { ContentListComponent } from '../page/main/content-list/content-list.component';

import { AuthGuard } from '../authentication/auth.guard';
import { ArticleEditorComponent } from '../page/main/article-list/article-editor/article-editor.component';
import { ArticleListComponent } from '../page/main/article-list/article-list.component';
import { AdminHomeComponent } from '../page/admin-home/admin-home.component';
import { AdminGuard } from '../core/authGuards/admin.guard';


const routes: Routes = [
    { path: 'upload', component: UploadComponent },
    { path: 'home', component: ContentListComponent, canActivate: [AuthGuard] },
  
    {path:'article',component:ArticleEditorComponent},
    {path:'articles',component:ArticleListComponent},
  
    {path:'adminHome',component:AdminHomeComponent,canActivate: [AdminGuard]},
    { path: '', redirectTo: '/adminHome', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class pageRoutingModule { }
