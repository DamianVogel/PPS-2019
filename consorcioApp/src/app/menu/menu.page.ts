import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  casaLinda = '../../assets/Casa feliz.png';
  casaFea = '../../assets/Casa fea.png';

  imagenTomada: string;

  arrayFotos = [];

  options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    private camera: Camera,
    private navCtrl: NavController,
    
    ) { }

  ngOnInit() {
    
  
  }

  
  
  sacarFoto(){

    this.arrayFotos.push("this.imagenTomada");

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
