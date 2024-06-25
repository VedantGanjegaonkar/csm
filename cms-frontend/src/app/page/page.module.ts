import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ContentListComponent } from './main/content-list/content-list.component';
import { ContentComponent } from './main/content-list/content/content.component';



@NgModule({
  declarations: [
    MainComponent,
    ContentListComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContentListComponent
  ]
})
export class PageModule { }
