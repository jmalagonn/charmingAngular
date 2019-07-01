import { Component, OnInit } from '@angular/core';
import { Adittional } from 'src/app/icons';
import { ButtonIdService } from 'src/app/button-id.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-form-ordenar',
  templateUrl: './form-ordenar.component.html',
  styleUrls: ['./form-ordenar.component.css']
})
export class FormOrdenarComponent implements OnInit {

  adittionals: Adittional[];

  constructor(private buttonIdService: ButtonIdService) { }

  getAdittionals(): void{
    this.adittionals = this.buttonIdService.getAdittionals();
  }

  showAdditionals(option: string){
    option == 'noAddition' ? $('#additionals-block').css({ 'display': 'none',}) : ''; 
  }

  ngOnInit() {
    this.getAdittionals();
  }

}
