import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {
num=[1,2,4,5,6];
media=false;

  constructor() { }

  ngOnInit(): void {
  }
  setMedia(){
    this.media=true;
  }

  removeMedia() {
    this.media=false;
    }

}
