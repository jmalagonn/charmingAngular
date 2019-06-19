import { Component, OnInit } from '@angular/core';
import { Icon } from '../../icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  icon: Icon;

  constructor() { }

  ngOnInit() {
  }

}
