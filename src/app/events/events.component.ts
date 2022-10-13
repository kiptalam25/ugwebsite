import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File |null = null;
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
  }

 onChange(event:any) {
        this.file = event.target.files[0];
    }
    
  onUpload() {
    
    this.loading = !this.loading;
    // console.log(this.file);
    // this.myservice.upload(this.file).subscribe(
    //     (event: any) => {
    //         if (typeof (event) === 'object') {

    //             // Short link via api response
    //             this.shortLink = event.link;

    //             this.loading = false; // Flag variable 
    //         }
    //     }
    // );
}
  // file(file: string | Blob) {
  //   throw new Error('Method not implemented.');
  // }
}
