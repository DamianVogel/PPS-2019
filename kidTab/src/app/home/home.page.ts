import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {ListaUsuarios} from '../../app/enviroment'; 
import { ToastController } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {ConexionUsuariosPage} from '../conexion-usuarios/conexion-usuarios.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  email: string;
  clave: string;

  usuarios : any;

  imagen = '../../assets/LogoKidTabSolo.png';

  ref = firebase.database().ref('usuarios/');

  public formGroup: FormGroup;

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    public modalController: ModalController){
   
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({    
      email: ['', [Validators.email, Validators.required]],
      clave: ['', [Validators.required]]
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ConexionUsuariosPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
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
        if(usuario.email == this.formGroup.value.email && usuario.clave == this.formGroup.value.clave){
          
          //VALIDADO
          flagLogin = true;
          this.loginToast(flagLogin);            
          break;
        }
      }      
      
      //NO VALIDADO
      if(!flagLogin){
        this.loginToast(flagLogin);   
      }  
    });

  }

  mostrarUsuarios(){
    this.presentModal();

  }
    
    

}

  

