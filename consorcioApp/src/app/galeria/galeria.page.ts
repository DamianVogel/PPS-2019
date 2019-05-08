import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Imagenes } from '../../app/enviroment';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  listaImagenes: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ref = firebase.database().ref('imagenes/');

  constructor(
    //private webview: WebView,
    //private storage: Storage,
    
  ) {
    this.ref.on('value', resp => {
      this.listaImagenes = Imagenes(resp);
    });
  }

  ngOnInit() {
  }






}
