import { Component, OnInit } from '@angular/core';
import { UsuariosTest } from '../../app/enviroment'; 



@Component({
  selector: 'app-conexion-usuarios',
  templateUrl: './conexion-usuarios.page.html',
  styleUrls: ['./conexion-usuarios.page.scss'],
})
export class ConexionUsuariosPage implements OnInit {

  // @Input() value: number;
  usuariosTest: any;

  constructor() { 
    this.usuariosTest = UsuariosTest();
  }

  ngOnInit() {
    console.log(this.usuariosTest);
  }

}
