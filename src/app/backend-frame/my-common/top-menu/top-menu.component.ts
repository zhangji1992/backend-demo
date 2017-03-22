import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  selectedMenu: number = null;
  constructor() { }

  ngOnInit() {
  }

  clickMenu(index: number){
    this.selectedMenu = index;
    console.log('selectedMenu', this.selectedMenu);
  }
}
