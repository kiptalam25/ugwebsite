import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './navbarData';


interface SideNavToggle{
    screenWidth:number;
    collapsed:boolean;
}


@Component({
  selector: 'app-admin-left-menu',
  templateUrl: './admin-left-menu.component.html',
  styleUrls: ['./admin-left-menu.component.scss']
})


export class AdminLeftMenuComponent implements OnInit {


  
  constructor() { }

  ngOnInit(): void {
  }

@Output() onToggleSideNav:EventEmitter<SideNavToggle> =new EventEmitter();
collapsed=false;
screenWidth=0;
navData=navbarData;

toggleCollapse():void{
this.collapsed=!this.collapsed;
this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
}

closeSidenav():void {
  this.collapsed=false;
this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }
  
}
