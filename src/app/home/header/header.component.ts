import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  onResize(){
    let windowHeight = window.innerHeight;
    let element = document.getElementById('hero') as HTMLElement;
    if (element != null) {
      element.style.height = windowHeight + 'px';
    }
  }

  constructor() { }

  ngOnInit() {
    this.onResize();
  }

}
