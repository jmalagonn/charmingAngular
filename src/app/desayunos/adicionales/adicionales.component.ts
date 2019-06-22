import { Component, OnInit } from '@angular/core';
import { Adittional} from 'src/app/icons';
import { ButtonIdService } from 'src/app/button-id.service';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.component.html',
  styleUrls: ['./adicionales.component.css']
})
export class AdicionalesComponent implements OnInit {

  adittionals: Adittional[];

  constructor(private buttonIdService: ButtonIdService) { }

  getAdittionals(): void {
    this.adittionals = this.buttonIdService.getAdittionals();
  }

  ngOnInit() {
    this.getAdittionals();
    console.log(this.adittionals)
  }

}
