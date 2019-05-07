import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  constructor() { }

  ngOnInit() {
  }

  



}
