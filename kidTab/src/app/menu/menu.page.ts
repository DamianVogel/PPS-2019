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

  opcion: any;
  imgOpcion: any;
  idioma: any;



  constructor() { 
    this.listaColores = false;
    this.listaNumeros = false;
    this.listaAnimales = false;
  }

  ngOnInit() {
    this.opcion = 1;
    this.idioma = 1;
    this.cambiarOpcion();
    
  
  }

  cambiarOpcion(){
    switch(this.opcion){
      case 1:
        this.mostrarColores();
        this.opcion = 2;
        break;

      case 2:
        this.mostrarNumeros();
        this.opcion = 3;
        break;

      case 3:
        this.opcion = 1;
        this.mostrarAnimales();
        break;

    }
    
  }

  cambiarIdioma(){
    switch(this.idioma){
      case 1:
        //this.mostrarColores();
        this.idioma = 2;
        
        break;

      case 2:
        //this.mostrarNumeros();
        this.idioma = 3;
        break;

      case 3:
        this.idioma = 1;
        //this.mostrarAnimales();
        break;

    }
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
