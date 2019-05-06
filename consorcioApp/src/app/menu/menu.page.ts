import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { WebView } from '@ionic-native/ionic-webview/ngx';



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
  arrayLindas = [];
  arrayFeas = [];  
  


  ref = firebase.database().ref('imagenes/');
  //refFeas = firebase.database().ref('imagenes/feas/')

  options: CameraOptions = {
    quality: 10,
    //destinationType: this.camera.DestinationType.DATA_URL,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    private camera: Camera,
    private navCtrl: NavController,
    private webview: WebView
    ) {
      
     }

  ngOnInit() {
    
  
  }

  subirImagen(imagen){
    let newImg = this.ref.push();
    newImg.set(imagen);
    //this.arrayFotos.filter( nueval)
  }


  subirFotos(array){
    
    console.log(array);


    array.forEach(imagen => {
        
      if(imagen.isChecked == true){
        this.subirImagen(imagen);
        array.splice(imagen, 1);
        console.log(array);
      }      
    });

    console.log(array);
  }

  eliminarFoto(array, imagen){
    console.log(array);
    array.splice(imagen, 1);
    console.log(array);
  }


  


  
  sacarFoto(tipo){
    
    var imagenTomada;
    var preview;

    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
        imagenTomada = 'data:image/jpeg;base64,' + imageData;
        preview = this.webview.convertFileSrc(imageData);
        //window.Ionic.WebView.convertFileSrc()
        
        
        //console.log(imagenTomada);
          
      
        switch(tipo){
          case 'linda':
            this.arrayFotos.push({
              'tipo':'linda',
              'imagen': imagenTomada,
              'preview': preview,
              isChecked:false
            });
          
            this.arrayLindas = this.arrayFotos.filter((fotos) =>{
              return fotos.tipo == 'linda';
            })

          break;
          
          
          case 'fea':
            this.arrayFotos.push({
              'tipo':'fea',
              'imagen': imagenTomada,
              'preview': preview,
              isChecked:false
            }); 

            this.arrayFeas = this.arrayFotos.filter((fotos) =>{
              return fotos.tipo == 'fea';
            })
            

          break;
        }
        
        //console.log(this.arrayFotos);
          
      },(err) => {
          console.log("ERROR EN CAMARA ", JSON.stringify(err));
      }
    );
      
    
    // this.arrayFotos.forEach(element => {
    //   this.subirImagen(element);
    // });
  }


    
  

  

  


}
