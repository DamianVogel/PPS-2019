import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  casaLinda = '../../assets/Casa feliz.png';
  casaFea = '../../assets/Casa fea.png';

  imagenTomada: string;

  options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    private camera: Camera,
    private navCtrl: NavController,
    //private androidPermissions: AndroidPermissions
    ) { }

  ngOnInit() {
    
  
  }

  
  
  sacarFoto(){

    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
    //   result =>{ console.log('Has permission?',result.hasPermission)
    //   if(!result.hasPermission){
    //     console.log("entro a pedir permisos");
    //     this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
        
    //   }
      

    // },
    //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    // );
  


    this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
      this.imagenTomada = 'data:image/jpeg;base64,' + imageData;
            //this.camera.cleanup();
     
    }, (err) => {
    // Handle error
    });
    }


}
