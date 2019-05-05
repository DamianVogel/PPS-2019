import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  casaLinda = '../../assets/Casa feliz.png';
  casaFea = '../../assets/Casa fea.png';

  imagenTomada: string;

  // arrayFotos = [{
  //   'tipo':'',
  //   'imagen':'',
  //   isChecked:false                      
  // }];

  arrayFotos = [];
  
  

  refLindas = firebase.database().ref('imagenes/lindas/');
  refFeas = firebase.database().ref('imagenes/feas/')

  options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    private camera: Camera,
    private navCtrl: NavController, 
    ) {
      
     }

  ngOnInit() {
    
  
  }

  subirImagen(imagen){
    //let newImg = this.ref.push();
    //newImg.set(imagen);
  }



  


  
  sacarFoto(tipo){

    
    switch(tipo){
      case 'linda':
        this.arrayFotos.push({
          'tipo':'linda',
          'imagen':'FotoLinda',
          isChecked:false
        });

      break;
      
      
      case 'fea':
        this.arrayFotos.push({
          'tipo':'fea',
          'imagen':'FotoFea',
          isChecked:false
        });

      
      
      break;


    }
    
    // this.arrayFotos.forEach(element => {
    //   this.subirImagen(element);
    // });

    // this.camera.getPicture(this.options).then((imageData) => {
    // // imageData is either a base64 encoded string or a file URI
    // // If it's base64 (DATA_URL):
    //   this.imagenTomada = 'data:image/jpeg;base64,' + imageData;
    //         //this.camera.cleanup();
    //   this.arrayFotos.push(this.imagenTomada);
      


    // }, (err) => {
    //   // Handle error
    // });
    // }
  }

  

  


}
