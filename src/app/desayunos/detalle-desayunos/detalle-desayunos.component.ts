import { Component, OnInit, Input } from '@angular/core';
import { Desayuno } from 'src/app/icons';

@Component({
  selector: 'app-detalle-desayunos',
  templateUrl: './detalle-desayunos.component.html',
  styleUrls: ['./detalle-desayunos.component.css']
})
export class DetalleDesayunosComponent implements OnInit {

  @Input() desayuno: Desayuno
  @Input() index: number;

  close(){
    this.desayuno = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
