import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ContentListComponent } from './page/main/content-list/content-list.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component'; 
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'home', component: ContentListComponent, canActivate: [AuthGuard] },

  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
