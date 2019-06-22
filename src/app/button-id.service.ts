import { Injectable } from '@angular/core';
import { Desayuno, Adittional } from 'src/app/icons';
import { desayunos, adittionals } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class ButtonIdService {

  getDesayunos(): Desayuno[]{
    return desayunos;
  }

  getAdittionals(): Adittional[]{
    return adittionals;
  }

  constructor() { }
}
