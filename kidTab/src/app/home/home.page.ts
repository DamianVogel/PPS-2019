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
    this.ref.on('value', resp => {
      //console.log(resp);
      this.usuarios = ListaUsuarios(resp);
      //console.log(this.usuarios);
    });
  }

  enviar(){
    alert(this.email + " " + this.clave);

  }

  alta(email:string){
    //alert("estoy en el alta");
    
    if(email!==undefined){
      alert("estoy en el alta");
      let objAlta = this.ref.push()
      objAlta.set(email);
    }

  }



}
