import { compileNgModule } from '@angular/compiler';
import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  @Input()
  item!:{
    id:string,
    filename:string,
    path:string,
    size:number,
    mimetype:string
  };

  @Input()
  itemsForDel:any[]=[]

  @Output()
  itemDeleted = new EventEmitter<string>();

  onDeletedItem(){

    console.log(`deleted ${this.item.id}`);
    this.itemDeleted.emit(this.item.id)
    
  }

  

}
