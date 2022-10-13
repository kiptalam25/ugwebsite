import { Component, OnInit } from '@angular/core';

import{ DatePipe}from '@angular/common';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  public now: Date = new Date();
  myDate:any =new Date();
  constructor(private datePipe: DatePipe){
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd HH:mm:ss');
      setInterval(() => {
        this.now = new Date();
        // this.now=this.datePipe.transform(this.myDate, 'yyyy-MM-dd HH:mm:ss');
      }, 1);
  }
  
  ngOnInit(): void {
  }

}
