import { Component, OnInit, Input } from '@angular/core';

import { products } from '../../products'

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.css']
})

export class ProductBlockComponent implements OnInit {

  @Input() index : number;
  products = products;

  cardClass(){
    return this.index % 2 == 0 ? 'card-a' : 'card-b';
  }

  constructor() { }

  ngOnInit() {
  }

}
