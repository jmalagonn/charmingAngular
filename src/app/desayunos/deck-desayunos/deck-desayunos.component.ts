import { Component, OnInit } from '@angular/core';
import { Desayuno } from 'src/app/icons';
import { ButtonIdService } from 'src/app/button-id.service';

@Component({
  selector: 'app-deck-desayunos',
  templateUrl: './deck-desayunos.component.html',
  styleUrls: ['./deck-desayunos.component.css']
})
export class DeckDesayunosComponent implements OnInit {

  desayunos: Desayuno[];
  selectedBreakfast: Desayuno;
  index: number;

  constructor(private buttonIdService: ButtonIdService) { }

  onSelect(desayuno: Desayuno, ind: number): void{
    this.selectedBreakfast = desayuno;
    this.index = ind;
  }
  
  getDesayunos(): void{
    this.desayunos = this.buttonIdService.getDesayunos();
  }

  ngOnInit() {
    this.getDesayunos();
  }

}
