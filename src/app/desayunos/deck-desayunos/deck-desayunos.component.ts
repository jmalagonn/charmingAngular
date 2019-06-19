import { Component, OnInit } from '@angular/core';
import { Desayuno } from 'src/app/icons';
import { ButtonIdService } from 'src/app/button-id.service';

@Component({
  selector: 'app-deck-desayunos',
  templateUrl: './deck-desayunos.component.html',
  styleUrls: ['./deck-desayunos.component.css']
})
export class DeckDesayunosComponent implements OnInit {

  selectedBreakfast: Desayuno;
  desayunos: Desayuno[];

  constructor(private buttonIdService: ButtonIdService) { }
  
  getDesayunos(): void{
    this.desayunos = this.buttonIdService.getDesayunos();
  }

  ngOnInit() {
    this.getDesayunos();
  }

}
