import { Component, OnInit } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  panelOpenState :boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
tile={text: 'Four', cols: 6, rows: 1, color: '#DDBDF1'}
menu={text: 'Four', cols: 1, rows: 1, color: '#00000'}

isSideNavCollapsed=false;
screenWidth=0;

onToggleSideNav(data: SideNavToggle):void {
  this.screenWidth=data.screenWidth;
  this.isSideNavCollapsed=data.collapsed;
      }
  
news: boolean = false;
adverts: boolean = false;
gallery: boolean = false;
posts: boolean = false;
downloads:boolean=false;
request_display(req:string){
  switch(req) {
    case "posts":
      this.news=false;
      this.adverts=false;
      this.gallery=false;
      this.posts=true
      this.downloads=false;
      break;
    case "adverts":
      this.news=false;
      this.adverts=true;
      this.gallery=false;
      this.posts=false
      this.downloads=false;
      break;
      case "gallery":
        this.news=false;
        this.adverts=false;
        this.gallery=true;
        this.posts=false
      this.downloads=false;
      break;
      case "news":
        this.news=true;
        this.adverts=false;
        this.gallery=false;
        this.posts=false;
        this.downloads=false;
      break;
      case "news":
        this.news=false;
        this.adverts=false;
        this.gallery=false;
        this.posts=false;
        this.downloads=true;
      break;
    default:
      
        this.news=false;
        this.adverts=false;
        this.gallery=false;
        this.posts=false;
        this.downloads=false;
  } 
}
}
