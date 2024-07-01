import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ContentListComponent } from './page/main/content-list/content-list.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component'; 
import { AuthGuard } from './authentication/auth.guard';
import { ArticleEditorComponent } from './page/main/article-list/article-editor/article-editor.component';
import { ArticleListComponent } from './page/main/article-list/article-list.component';
import { AdminHomeComponent } from './page/admin-home/admin-home.component';
import { AdminGuard } from './core/authGuards/admin.guard';
import { NavbarComponent } from './layouts/navbar/navbar.component';

const routes: Routes = [
  // { path: 'upload', component: UploadComponent },
  // { path: 'home', component: ContentListComponent, canActivate: [AuthGuard] },

  // {path:'article',component:ArticleEditorComponent},
  // {path:'articles',component:ArticleListComponent},

  // {path:'adminHome',component:AdminHomeComponent,canActivate: [AdminGuard]},

  // {
  //   path: 'layouts',
  //   component: NavbarComponent,
  //   children: [
  //     { path: '', loadChildren: () => import('./page/page.module').then(m => m.PageModule)},
     
  //   ]
  // },

  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },



  // {path:'signup', component:SignupComponent},
  // {path:'login', component:LoginComponent},
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
