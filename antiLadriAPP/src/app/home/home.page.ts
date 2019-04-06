import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rutaImagen: string;

  constructor(){
    this.rutaImagen='../../assets/Bandido 1024-pdf.png'
  }

}
