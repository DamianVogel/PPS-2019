import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  animales = '../../assets/Animales.PNG';
  colores = '../../assets/Colores.PNG';

  listaColores:boolean;
  listaNumeros:boolean;
  listaAnimales:boolean;



  constructor() { 
    this.listaColores = false;
    this.listaNumeros = false;
    this.listaAnimales = false;
  }

  ngOnInit() {
  }

  mostrarColores(){
    this.listaColores=true;
    this.listaNumeros=false;
    this.listaAnimales=false;
  }

  mostrarNumeros(){
    this.listaColores=false;
    this.listaNumeros=true;
    this.listaAnimales=false;
    
  }

  mostrarAnimales(){
    this.listaColores=false;
    this.listaNumeros=false;
    this.listaAnimales=true;
    
  }



}
