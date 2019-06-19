import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  onResize() {
    let windowHeight = window.innerHeight;
    let element = document.getElementById('inner-menu') as HTMLElement;
    if (element != null) {
      element.style.height = windowHeight + 'px';
    }
  }

  constructor() { }

  ngOnInit() {
    let element = document.getElementById('inner-menu') as HTMLElement;
    element.style.display = ' none';
    this.onResize();
  }

}
