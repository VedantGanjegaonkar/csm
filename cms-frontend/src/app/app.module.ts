import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload.servive';
import { PageModule } from './page/page.module';
import { ContentListComponent } from './page/main/content-list/content-list.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { QuillModule } from 'ngx-quill';
import { AuthInterceptor } from './auth.interceptor';
import { NavbarComponent } from './layouts/navbar/navbar.component';


// const appRoutes: Routes = [
//   // { path: '', component: UploadComponent },
//   // { path: 'home', component: ContentListComponent  }
// ];

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthenticationModule,
    AppRoutingModule,
    PageModule,
    QuillModule.forRoot()
    
  ],
  providers: [UploadService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
