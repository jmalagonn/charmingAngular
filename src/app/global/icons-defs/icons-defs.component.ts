import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '../../icons';

@Component({
  selector: 'app-icons-defs',
  templateUrl: './icons-defs.component.html',
  styleUrls: ['./icons-defs.component.css']
})
export class IconsDefsComponent implements OnInit {

  @Input() icon: Icon;

  constructor() { }

  ngOnInit() {
  }

}
