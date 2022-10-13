import { HttpClient, HttpErrorResponse, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { Images } from '../models/images';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-admin-downloads',
  templateUrl: './admin-downloads.component.html',
  styleUrls: ['./admin-downloads.component.scss']
})
export class AdminDownloadsComponent implements OnInit {
  fileName : string="";
  constructor(private myservice: MyserviceService, private http: HttpClient) { }
 
  @Input()
  requiredFileType:string | undefined;
  uploadProgress:number | undefined;
  uploadSub: Subscription | undefined;
  dbImage: any;
  postResponse: any;
  // successResponse: string;
  image: any;
  images:Images[]|undefined

  ngOnInit(): void {
    this.viewImage();
  }
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
  
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("file", file);

        const upload$ = this.http.post("http://localhost:8080/uploadFile", formData, {
            reportProgress: true,
            observe: 'events'
        })
        .pipe(
            finalize(() => this.reset())
        );
      
        this.uploadSub = upload$.subscribe(event => {
          if (event.type == HttpEventType.UploadProgress ) {
            if (event.total ) {
              const total: number = event.total;
            this.uploadProgress = Math.round(100 * (event.loaded / total));
            }
        this.uploadProgress=event.loaded;
          }
        })
    }
}

cancelUpload() {
this.uploadSub?.unsubscribe();
this.reset();
}
reset() {
this.uploadProgress = 0;
this.uploadSub = undefined;
}

viewImage() {
  this.myservice.getFiles().subscribe( (res:Images[]) => {
        this.images = res;
        // this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
}
}
