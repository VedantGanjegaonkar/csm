import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  ImageItems: any[] = [];

  constructor(private http: HttpClient) { }

 
  ngOnInit(): void {
    this.loadImageItems();
  }

  loadImageItems(): void {
    this.http.get<any[]>('http://localhost:3000/api/getImages')
      .subscribe(
        (data) => {
          this.ImageItems = data.map(item => ({
            id: item._id,
            filename: item.filename,
            size:item.size,
            mimetype:item.mimetype,
            path: `http://localhost:3000/${item.path}`
          }));
        },
        (error) => {
          console.error('Error fetching image items:', error);
        }
      );
  }
  onDel(id:any){
    console.log(`deledte from parent ${id}`);

    // this.http.delete(`http://localhost:5000/api/images/${id}`)
    //   .subscribe(
    //     () => {
    //       this.ImageItems = this.ImageItems.filter(item => item._id !== id);
    //     },
    //     (error) => {
    //       console.error('Error deleting image:', error);
    //     }
    //   );
    
    
  }

}
