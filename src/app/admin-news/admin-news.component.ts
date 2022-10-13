import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss']
})
export class AdminNewsComponent implements OnInit {
show =false;

  constructor() { }

  ngOnInit(): void {
  }
showhide(){
  this.show=true;
}
}
