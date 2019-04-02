import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {ListaUsuarios} from '../../app/enviroment'; 

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

  constructor(){
   
  }

  enviar(){
    this.ref.on('value', resp => {    
      this.usuarios = ListaUsuarios(resp);      
      
      for(let usuario of this.usuarios){
        if(usuario.email == this.email && usuario.clave == this.clave){
          alert("identificado");
          break;
        }
      }      
      alert("Email o clave incorrecta");   
    });

  }
}
