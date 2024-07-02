import { Component } from '@angular/core';
import { UploadService } from '../upload.servive';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile?: any;
  uploadProgress: number = 0;
  imageUrl: any = '';
  fileName!: any;

  constructor(private uploadService: UploadService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile?.name;

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };

    reader.readAsDataURL(this.selectedFile); // Corrected line
  }

  isImage(fileUrl: string | ArrayBuffer): boolean {
    return typeof fileUrl === 'string' && fileUrl.startsWith('data:image');
  }

  onUpload() {
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).subscribe(
        (event: any) => {
          console.log(event);
          
          if (event.status === 'progress') {
            this.uploadProgress = event.message;
          } else if (event.imageUrl) {
            this.imageUrl = event.imageUrl;
          }
        },
        (err: any) => {
          console.error('Upload failed', err);
        },
        () => {
          alert("Uploaded Successfully");
        }
      );
    }
  }
}
