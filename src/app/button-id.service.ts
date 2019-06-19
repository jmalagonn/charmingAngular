import { Injectable } from '@angular/core';
import { Desayuno } from 'src/app/icons';
import { desayunos } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class ButtonIdService {

  getDesayunos(): Desayuno[]{
    return desayunos;
  }

  constructor() { }
}
