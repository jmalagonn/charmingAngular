import { Component, OnInit } from '@angular/core';
import { desayunos } from 'src/app/products';

@Component({
  selector: 'app-detalle-desayunos',
  templateUrl: './detalle-desayunos.component.html',
  styleUrls: ['./detalle-desayunos.component.css']
})
export class DetalleDesayunosComponent implements OnInit {

  desayunos = desayunos;

  constructor() { }

  ngOnInit() {
    document.getElementById('detail-breakfast').style.display = 'none';
  }

}
