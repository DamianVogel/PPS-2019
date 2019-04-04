import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {ListaUsuarios} from '../../app/enviroment'; 
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  email: string;
  clave: string;

  usuarios : any;

  ref = firebase.database().ref('usuarios/');

  constructor(public toastController: ToastController){
   
  }

  async loginToast(validado:boolean) {
    
    if(validado){
      const toast = await this.toastController.create({
        message: 'Bienvenido Usuario',
        //showCloseButton: true,
        position: 'middle',
        //closeButtonText: 'Aceptar',
        duration: 3000,
        //color: 'success',
        animated: true,
        cssClass: 'toastOk'
      });
      toast.present();
    }
    else{
      const toast = await this.toastController.create({
        message: 'Clave o Usuario Incorrecto',
        //showCloseButton: true,
        position: 'middle',
        duration: 3000,
        //color: 'danger',
        animated: true,
        cssClass: 'toastFail'
      });
      toast.present();
    }  
  }
  


  enviar(){  
    let flagLogin = false;

    this.ref.on('value', resp => {    
      
      this.usuarios = ListaUsuarios(resp);      
      
      for(let usuario of this.usuarios){
        if(usuario.email == this.email && usuario.clave == this.clave){
          flagLogin = true;
          this.loginToast(flagLogin);            
          break;
        }
      }      
      
      if(!flagLogin){
        this.loginToast(flagLogin);   
      }  
    });

  }
    
    

}

  

