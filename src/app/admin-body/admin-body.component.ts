import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.scss']
})

export class AdminBodyComponent implements OnInit {
@Input() public collapsed=false;
@Input() public screenWidth=0;
  constructor() { }

  ngOnInit(): void {
  }

  getClass():string{
    let styleClass='';
    if(this.collapsed ){//
      styleClass='body-trimmed';
    }else if(this.collapsed && this.screenWidth<=768 && this.screenWidth>0){
      styleClass='body-md-screen'
    }
return styleClass;
  }
}
