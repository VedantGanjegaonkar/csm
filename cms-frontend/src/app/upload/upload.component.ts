import { Component } from '@angular/core';
import { UploadService } from '../upload.servive';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile?: File;
  uploadProgress: number = 0;
  imageUrl: string = '';

  constructor(private uploadService: UploadService) { }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).subscribe(
        (event: any) => {
          if (event.status === 'progress') {
            this.uploadProgress = event.message;
          } else if (event.imageUrl) {
            this.imageUrl = event.imageUrl;
            alert("upoaded success")
          }
        },
        (err:any) => {
          console.error('Upload failed', err);
        }
      );
    }
  }
}
