import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { Base64 } from '@ionic-native/base64/ngx';
import { GaleriaPage } from '../galeria/galeria.page';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  casaLinda = '../../assets/Casa feliz.png';
  casaFea = '../../assets/Casa fea.png';

  usuario: any;

  progressBar: boolean = false;
  arrayFotos = [];
  arrayLindas = [];
  arrayFeas = [];  
  arrayFotosASubir = [];
  


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
  
    private webview: WebView,
    private storage: Storage,
    private base64: Base64,
    public modalController: ModalController
    ) {
      
     }

  ngOnInit() {
    this.storage.get('usuario').then((val) => {
      
      this.usuario = val;
      
      console.log('El usuario es', this.usuario);
    });
  
  }

  subirImagen(imagen){
    
    let filePath: string = imagen.path;
    
    this.base64.encodeFile(filePath).then((base64File: string) => {
        //console.log(base64File);
        imagen.imgbase64 = base64File;
        
        let newImg = this.ref.push();
        
        newImg.set(imagen);
        console.log("Se subio el archivo!");

      }, (err) => {
        console.log(err);
      });
        
  }


  subirFotos(array){
    this.progressBar = true;
    
   // this.arrayFotosASubir = array;
    
    array.reverse();


    //TAL VEZ HAY QUE HACER UN FOR Y NO UN FOR EACH.
    array.forEach((imagen,index) => {        
      if(imagen.isChecked == true){
               

        //USAR CONSOLE LOG PARA VER QUE SE BORRA.
        this.subirImagen(imagen);        
        array.splice(index, 1);
      }      
    });


   // array = [];
      
    this.progressBar = false;
   
    //colocar ACA ALERT DE QUE SE SUBIERON OK!


  }


  

  


  
  sacarFoto(tipo){
    
    var imagenTomada;
    var preview;
    var path;

    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
        imagenTomada = 'data:image/jpeg;base64,' + imageData;
        path = imageData;
        preview = this.webview.convertFileSrc(imageData);
        //window.Ionic.WebView.convertFileSrc()
        
        
        //console.log(imagenTomada);
          
      
        switch(tipo){
          case 'linda':
            this.arrayFotos.push({
              'usuario':this.usuario.correo,
              'usuario_key': this.usuario.key,              
              'tipo':'linda',
              'imagen': imagenTomada,
              'imgbase64':'',
              'preview': preview,
              'path': path,
              'timestamp': Date(),
              isChecked:false
            });
          
            this.arrayLindas = this.arrayFotos.filter((fotos) =>{
              return fotos.tipo == 'linda';
            })

          break;
          
          
          case 'fea':
            this.arrayFotos.push({
              'usuario':this.usuario.correo,
              'usuario_key': this.usuario.key,
              'tipo':'fea',
              'imagen': imagenTomada,
              'imgbase64':'',
              'preview': preview,
              'path': path,
              'timestamp': Date(),
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

  verFotosNube(){
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: GaleriaPage,
      componentProps: { value: 123 }
    });

    modal.onDidDismiss()
      .then((data) => {
        
        //this.usuarioSeleccionado = data.data; // Here's your selected user!
        // console.log(this.usuarioSeleccionado.clave);
        // console.log(this.usuarioSeleccionado.correo);

        // this.formGroup.value.email = this.usuarioSeleccionado.correo;
        // this.formGroup.value.clave = this.usuarioSeleccionado.clave;

        // this.formGroup.controls['email'].setValue(this.usuarioSeleccionado.correo);
        // this.formGroup.controls['clave'].setValue(this.usuarioSeleccionado.clave);
      });

    return await modal.present();
  }
    
  

  

  


}
