import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ContentListComponent } from './page/main/content-list/content-list.component'; 

const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'home', component: ContentListComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
