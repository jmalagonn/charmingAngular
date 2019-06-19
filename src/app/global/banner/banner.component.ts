import { Component, OnInit, Input } from '@angular/core';

import { banner } from '../../products';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  bannerHome = banner;

  @Input() color: string;

  colorBanner(){
    let res = {'background': this.color };
    return res;
  }

  constructor() { }

  ngOnInit() {
  }

}
