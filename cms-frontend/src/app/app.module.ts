import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload.servive';
import { PageModule } from './page/page.module';
import { ContentListComponent } from './page/main/content-list/content-list.component';

const appRoutes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'home', component: ContentListComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
